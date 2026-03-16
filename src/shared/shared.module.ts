import { Global, Module } from '@nestjs/common';
import { EntityExistsConstraint } from './decorators/entity-exists.decorator';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService, EntityExistsConstraint],
  exports: [PrismaService, EntityExistsConstraint],
})
export class SharedModule {}
