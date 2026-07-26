import { Module } from '@nestjs/common';
import { UserViewsService } from './user-views.service';
import { UserViewsController } from './user-views.controller';

@Module({
  providers: [UserViewsService],
  controllers: [UserViewsController]
})
export class UserViewsModule {}
