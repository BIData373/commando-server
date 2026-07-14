import { config } from "dotenv";
import path from "node:path";

export const envFilePath = [
  path.join(__dirname, '../config/common.env'),
  path.join(__dirname, `../config`, process.env.ENV ?? '', '.env')
]

config({ path: envFilePath });

export const isDev = process.env.ENVIRONMENT === 'development'

export const serverPrefix = process.env.SERVER_PREFIX ?? ''
export const port = process.env.PORT;

export const swaggerEnabled = process.env.SWAGGER_ENABLED === 'true'
export const ssoEnabled = process.env.VITE_USE_SSO === 'true'

export const staticToken = process.env.STATIC_TOKEN

export const s3Region = process.env.S3_REGION
export const s3AccessKeyId = process.env.S3_ACCESS_KEY_ID
export const s3SecretAccessKey = process.env.S3_SECRET_ACCESS_KEY
export const s3Bucket = process.env.S3_BUCKET_NAME
export const s3EndpointUrl = process.env.S3_ENDPOINT_URL
export const s3PublicUrl = process.env.S3_PUBLIC_URL
export const s3RejectUnauthorized = process.env.S3_REJECT_UNAUTHORIZED !== 'false'

export const sendForbiddenMessages = process.env.SEND_FORBIDDEN_MESSAGES === 'true'

export const useRedis = JSON.parse(process.env.USE_REDIS ?? 'false')
export const redisHost = process.env.REDIS_HOST
export const redisPort = Number(process.env.REDIS_PORT ?? 6379)
export const redisUsername = process.env.REDIS_USERNAME
export const redisPassword = process.env.REDIS_PASSWORD
export const redisSocketPrefix = process.env.REDIS_SOCKET_PREFIX

// TODO - maybe default?
export const aiExtractionTaskName = process.env.AI_EXTRACTION_TASK_NAME ?? ''