import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Injectable } from '@nestjs/common';
import { NodeHttpHandler } from '@smithy/node-http-handler';
import { randomUUID } from 'crypto';
import * as https from 'https';
import { s3AccessKeyId, s3Bucket, s3EndpointUrl, s3Region, s3RejectUnauthorized, s3SecretAccessKey } from '../../common/consts/env';

const requiredEnv = {
  S3_REGION: s3Region,
  S3_ACCESS_KEY_ID: s3AccessKeyId,
  S3_SECRET_ACCESS_KEY: s3SecretAccessKey,
  S3_BUCKET_NAME: s3Bucket,
  S3_ENDPOINT_URL: s3EndpointUrl
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

    this.bucket = s3Bucket!;

    try {
      this.client = new S3Client({
        region: s3Region!,
        endpoint: s3EndpointUrl,
        forcePathStyle: true,
        credentials: {
          accessKeyId: s3AccessKeyId!,
          secretAccessKey: s3SecretAccessKey!,
        },
        requestHandler: new NodeHttpHandler({
          httpsAgent: new https.Agent({ rejectUnauthorized: s3RejectUnauthorized }),
        }),
      });

      console.log('[S3] Client initialized');
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

  async signUrl(key: string, expiresIn?: number): Promise<string | null> {
    if (!this.client || !this.bucket) {
      console.warn('[S3] Sign skipped — client not initialized');
      return null;
    }

    try {
      return await getSignedUrl(
        this.client,
        new GetObjectCommand({ Bucket: this.bucket, Key: key }),
        { expiresIn }
      );
    } catch (err) {
      console.error(`[S3] Sign failed for key "${key}"`, err);
      return null;
    }
  }
}
