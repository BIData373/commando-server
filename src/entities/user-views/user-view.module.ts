import { Module } from '@nestjs/common';
import { UserViewService } from './user-view.service';
import { UserViewController } from './user-view.controller';

@Module({
  providers: [UserViewService],
  controllers: [UserViewController]
})
export class UserViewModule {}
