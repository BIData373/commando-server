import { Module } from '@nestjs/common';
import { S3Module } from '../s3/s3.module';
import { SourceController } from './source.controller';
import { SourceService } from './source.service';

@Module({
  imports: [S3Module],
  controllers: [SourceController],
  providers: [SourceService],
  exports: [SourceService]
})
export class SourceModule { }
