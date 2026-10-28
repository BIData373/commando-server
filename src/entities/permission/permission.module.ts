import { Module } from '@nestjs/common';
import { UserWorkspaceVisitsModule } from '../user-workspace-visits/user-workspace-visits.module';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';

@Module({
  imports: [UserWorkspaceVisitsModule],
  controllers: [PermissionController],
  providers: [PermissionService],
  exports: [PermissionService]
})
export class PermissionModule { }
