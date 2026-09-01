import { Module } from '@nestjs/common';
import { UserViewedMessageController } from './user-viewed-messages.controller';
import { UserViewedMessagesService } from './user-viewed-messages.service';

@Module({
  controllers: [UserViewedMessageController],
  providers: [UserViewedMessagesService],
  exports: [UserViewedMessagesService],
})
export class UserViewedMessagesModule { }
