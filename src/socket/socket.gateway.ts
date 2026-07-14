import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Request } from 'express'
import { Server, Socket } from 'socket.io'
import { PrismaService } from '../common/prisma.service'
import { viewerTypes } from '../entities/permission/consts/permission-types'
import { PermissionService } from '../entities/permission/permission.service'
import { PermissionType } from '../types/prisma'
import { SocketEventType } from './types/socket-event-type.enum'
import { ISocketEvent } from './types/socket-event.interface'
import { ssoEnabled, staticToken } from '../common/consts/env'
import { isBiHeader, requestUsernameHeader, staticTokenHeader } from '../common/consts/headers'
import { CreateUserDto } from '../entities/user/dto/request/create-user.dto'
import { admin } from '../common/consts/admin'
import { verifySsoUser } from '../common/functions/cookie'
import { SOCKET_UPN } from './consts/socket-data'


@WebSocketGateway({ cors: { credentials: true, origin: true } })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  private readonly server: Server

  constructor(
    private readonly permissionService: PermissionService,
    private readonly prisma: PrismaService,
  ) { }

  async handleConnection(socket: Socket): Promise<void> {
    const { auth, query } = socket.handshake

    let user: CreateUserDto
    try {
      const hasStaticToken = (
        staticToken &&
        staticToken === (auth[staticTokenHeader] as string)
      )

      if (hasStaticToken || !ssoEnabled) {
        const customUpn = auth[requestUsernameHeader] as string

        const currentUser = customUpn ? { upn: customUpn } : admin
        const isBI = (auth[isBiHeader] as string ?? 'true') === 'true'

        user = {
          ...currentUser,
          info: { upn: currentUser.upn, isBI }
        }
      }
      else {
        const info = verifySsoUser(auth.ssoUser)

        user = { upn: info.upn, info }
      }

      socket.data[SOCKET_UPN] = user.upn

      if (query.urlName) {
        socket.join(query.urlName)
      }
    } catch (e) {
      console.error(e)
      socket.disconnect(true)
    }

    // const user = (client.request as Request).user
    // if (!user) {
    //   client.disconnect()
    //   return
    // }
    // client.data.userId = user.id
  }

  handleDisconnect(_client: Socket): void { }

  @SubscribeMessage('join')
  async handleJoin(client: Socket, urlName: string): Promise<void> {
    const workspace = await this.prisma.workspace.findUnique({
      where: { urlName, deletedAt: null }
    })
    if (!workspace) return

    const hasAccess = await this.permissionService.hasPermission(
      client.data.userId,
      workspace.id,
      viewerTypes
    )
    if (!hasAccess) return

    client.join(urlName)
  }

  emitToUrlName(urlName: string, eventType: SocketEventType, ...data: any[]): void {
    this.server.to(urlName).emit(eventType, ...data)
  }

  async emitToAllPermitted(
    workspaceId: number,
    permissionTypes: PermissionType[],
    eventType: SocketEventType,
    ...data: any[]
  ): Promise<void> {
    const workspace = await this.prisma.workspace.findUnique({
      where: { id: workspaceId, deletedAt: null }
    })
    if (!workspace) return

    const permissions = await this.prisma.permission.findMany({
      where: { workspaceId, type: { in: permissionTypes } }
    })
    const permittedUserIds = new Set(permissions.map(p => p.userId))

    const roomSockets = await this.server.in(workspace.urlName).fetchSockets()
    const targetIds = roomSockets
      .filter((s) => permittedUserIds.has((s.data as { userId: number }).userId))
      .map((s) => s.id)

    if (targetIds.length === 0) {
      return
    }

    this.server.to(targetIds).emit(eventType, data)
  }

}
