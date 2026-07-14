import { Module } from '@nestjs/common';
import { SocketModule } from '../../socket/socket.module';
import { S3Module } from '../s3/s3.module';
import { TaskModule } from '../task/task.module';
import { SourceController } from './source.controller';
import { SourceService } from './source.service';

@Module({
  imports: [S3Module, SocketModule, TaskModule],
  controllers: [SourceController],
  providers: [SourceService],
  exports: [SourceService]
})
export class SourceModule { }
