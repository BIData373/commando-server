import { Module } from '@nestjs/common';
import { PermissionModule } from '../permission/permission.module';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  imports: [PermissionModule],
  controllers: [TagController],
  providers: [TagService],
  exports: [TagService]
})
export class TagModule { }
