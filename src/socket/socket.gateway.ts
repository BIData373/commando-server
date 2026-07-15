import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { PrismaService } from '../common/prisma.service'
import { viewerTypes } from '../entities/permission/consts/permission-types'
import { PermissionService } from '../entities/permission/permission.service'
import { PermissionType } from '../types/prisma'
import { SocketEventType } from './types/socket-event-type.enum'
import { ISocketEvent } from './types/socket-event.interface'
import { resolveUser } from '../common/functions/cookie'
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

    try {
      const user = resolveUser(auth, auth.ssoUser)

      socket.data[SOCKET_UPN] = user.upn

      if (query.urlName) {
        socket.join(query.urlName)
      }
    } catch (e) {
      console.error(e)
      socket.disconnect(true)
    }
  }

  handleDisconnect(_client: Socket): void { }

  // TODO - handle live updates for personal page via adding the user to multiple rooms
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
      where: { workspaceId, type: { in: permissionTypes } },
      include: { user: true },
    })
    const permittedUpns: Record<string, true> = Object.fromEntries(
      permissions.map(p => [p.user.upn, true as const])
    )

    const roomSockets = await this.server.in(workspace.urlName).fetchSockets()
    const targetIds = roomSockets
      .filter((s) => permittedUpns[s.data[SOCKET_UPN]])
      .map((s) => s.id)

    if (targetIds.length === 0) {
      return
    }

    this.server.to(targetIds).emit(eventType, data)
  }

}
