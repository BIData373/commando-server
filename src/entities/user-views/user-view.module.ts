import { Module } from '@nestjs/common';
import { UserViewController } from './user-view.controller';
import { UserViewService } from './user-view.service';

@Module({
  controllers: [UserViewController],
  providers: [UserViewService],
  exports: [UserViewService],
})
export class UserViewModule { }
