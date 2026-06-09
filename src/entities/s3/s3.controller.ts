import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { GetSignedUrlDto } from './dto/request/get-signed-url.dto';
import { SignedUrlDto } from './dto/response/signed-url.dto';
import { S3Service } from './s3.service';

@Controller('attachment')
export class S3Controller {
  constructor(private readonly s3: S3Service) { }

  @ApiOperation({ operationId: 'getAttachmentSignedUrl' })
  @ApiQuery({ type: GetSignedUrlDto })
  @Get('signed-url')
  @ApiOkResponse({ type: SignedUrlDto })
  @TransformPlainToInstance(SignedUrlDto)
  async getSignedUrl(@Query() { key }: GetSignedUrlDto): Promise<SignedUrlDto> {
    return { url: await this.s3.signUrl(key) };
  }
}
