import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { MessageRelayModule } from '../services/message-relay.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService],
  imports: [MessageRelayModule]
})
export class TaskModule { }
