import { Module } from '@nestjs/common';
import { S3Module } from '../s3/s3.module';
import { SourceAttachmentController } from './source-attachment.controller';
import { SourceAttachmentService } from './source-attachment.service';

@Module({
  imports: [S3Module],
  controllers: [SourceAttachmentController],
  providers: [SourceAttachmentService],
  exports: [SourceAttachmentService]
})
export class SourceAttachmentModule { }
