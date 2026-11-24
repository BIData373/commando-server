import { Module } from '@nestjs/common';
import { SocketModule } from '../../socket/socket.module';
import { MessageRelayModule } from '../services/message-relay.module';
import { SourceAttachmentModule } from '../source-attachment/source-attachment.module';
import { TaskModule } from '../task/task.module';
import { SourceController } from './source.controller';
import { SourceService } from './source.service';

@Module({
  imports: [MessageRelayModule, SocketModule, SourceAttachmentModule, TaskModule],
  controllers: [SourceController],
  providers: [SourceService],
  exports: [SourceService]
})
export class SourceModule { }
