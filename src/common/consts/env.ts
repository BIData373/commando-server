import { config } from "dotenv";
import path from "node:path";

export const envFilePath = [
    path.join(__dirname, '../config/common.env'),
    path.join(__dirname, `../config`, process.env.ENV ?? '', '.env')
]

config({ path: envFilePath });

export const ssoEnabled = process.env.VITE_USE_SSO === 'true'

export const s3Region = process.env.S3_REGION
export const s3AccessKeyId = process.env.S3_ACCESS_KEY_ID
export const s3SecretAccessKey = process.env.S3_SECRET_ACCESS_KEY
export const s3Bucket = process.env.S3_BUCKET_NAME
export const s3EndpointUrl = process.env.S3_ENDPOINT_URL
export const s3RejectUnauthorized = process.env.S3_REJECT_UNAUTHORIZED !== 'false'

export const isDev = process.env.ENVIRONMENT === 'development'