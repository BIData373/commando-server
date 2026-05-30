import { DeleteObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { awsAccessKeyId, awsRegion, awsS3Bucket, awsSecretAccessKey } from '../../common/consts/env';

const requiredEnv = {
  AWS_REGION: awsRegion,
  AWS_ACCESS_KEY_ID: awsAccessKeyId,
  AWS_SECRET_ACCESS_KEY: awsSecretAccessKey,
  AWS_S3_BUCKET: awsS3Bucket
};

@Injectable()
export class S3Service {
  private readonly client: S3Client | null = null;
  private readonly bucket: string | null = null;

  constructor() {
    const missing = Object.entries(requiredEnv)
      .filter(([, v]) => !v)
      .map(([k]) => k);

    if (missing.length) {
      console.warn(`[S3] Client not initialized — missing env vars: ${missing.join(', ')}`);
      return;
    }

    this.bucket = awsS3Bucket;

    try {
      this.client = new S3Client({
        region: awsRegion,
        credentials: {
          accessKeyId: awsAccessKeyId,
          secretAccessKey: awsSecretAccessKey,
        },
      });
    } catch (err) {
      console.error('[S3] Client failed to initialize', err);
    }
  }

  async upload(file: Express.Multer.File, folder: string): Promise<string | undefined> {
    if (!this.client || !this.bucket) {
      console.warn('[S3] Upload skipped — client not initialized');
      return undefined;
    }

    const ext = file.originalname.split('.').pop();
    const key = `${folder}/${randomUUID()}.${ext}`;

    try {
      await this.client.send(new PutObjectCommand({
        Bucket: this.bucket,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      }));
      return key;
    } catch (err) {
      console.error('[S3] Upload failed', err);
      return undefined;
    }
  }

  async delete(key: string): Promise<void> {
    if (!this.client || !this.bucket) {
      console.warn('[S3] Delete skipped — client not initialized');
      return;
    }

    try {
      await this.client.send(new DeleteObjectCommand({
        Bucket: this.bucket,
        Key: key,
      }));
    } catch (err) {
      console.error(`[S3] Delete failed for key "${key}"`, err);
    }
  }
}
