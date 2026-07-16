import { Exclude } from 'class-transformer'
import { ExposeProperty } from '../../common/decorators/expose-property.decorator'
import { SocketEventType } from '../types/socket-event-type.enum'

@Exclude()
export class SocketEventDto {
  @ExposeProperty({ enum: SocketEventType, enumName: 'SocketEvent' })
  type: SocketEventType
}
