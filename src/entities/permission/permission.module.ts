import { Module } from '@nestjs/common';
import { PermissionGuard } from './guards/permission.guard';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';

@Module({
  controllers: [PermissionController],
  providers: [
    PermissionService,
    PermissionGuard
  ],
  exports: [
    PermissionService,
    PermissionGuard
  ]
})
export class PermissionModule { }
