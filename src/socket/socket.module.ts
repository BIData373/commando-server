import { Module } from '@nestjs/common'
import { PermissionModule } from '../entities/permission/permission.module'
import { SocketGateway } from './socket.gateway'

@Module({
  imports: [PermissionModule],
  providers: [SocketGateway],
  exports: [SocketGateway],
})
export class SocketModule { }
