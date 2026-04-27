import { Global, Module } from '@nestjs/common';
import { HasWorkspacePermissionConstraint } from '../entities/workspace/decorators/has-workspace-permission.decorator';
import { EntityExistsConstraint } from './decorators/entity-exists.decorator';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [
    PrismaService,
    EntityExistsConstraint,
    HasWorkspacePermissionConstraint
  ],
  exports: [
    PrismaService,
    EntityExistsConstraint,
    HasWorkspacePermissionConstraint
  ],
})
export class PrismaModule { }
