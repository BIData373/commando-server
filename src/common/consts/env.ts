import { config } from "dotenv";
import path from "node:path";

export const env = process.env.ENV ?? ''
export const envFilePath = [
  path.join(process.cwd(), 'config/common.env'),
  path.join(process.cwd(), `config`, env, '.env')
]

config({ path: envFilePath });

export const isDev = process.env.ENVIRONMENT === 'development'

export const serverPrefix = process.env.SERVER_PREFIX ?? ''
export const port = process.env.PORT;

export const swaggerEnabled = process.env.SWAGGER_ENABLED === 'true'

export const ssoEnabled = process.env.VITE_USE_SSO === 'true'
export const ssoClientSecret = process.env.SSO_CLIENT_SECRET

export const staticToken = process.env.STATIC_TOKEN

export const useSSL = process.env.DB_USE_SSL === 'true'
export const databaseUrl = process.env.DATABASE_URL!
export const postgresPrismaUrl = process.env.POSTGRES_PRISMA_URL

export const s3Region = process.env.S3_REGION
export const s3AccessKeyId = process.env.S3_ACCESS_KEY_ID
export const s3SecretAccessKey = process.env.S3_SECRET_ACCESS_KEY
export const s3Bucket = process.env.S3_BUCKET_NAME
export const s3EndpointUrl = process.env.S3_ENDPOINT_URL
export const s3PublicUrl = process.env.S3_PUBLIC_URL
export const s3RejectUnauthorized = process.env.S3_REJECT_UNAUTHORIZED !== 'false'

export const sendForbiddenMessages = process.env.SEND_FORBIDDEN_MESSAGES === 'true'
export const notificationsEnabled = process.env.VITE_NOTIFICATIONS_ENABLED === 'true'

export const useRedis = JSON.parse(process.env.USE_REDIS ?? 'false')
export const redisHost = process.env.REDIS_HOST
export const redisPort = Number(process.env.REDIS_PORT ?? 6379)
export const redisUsername = process.env.REDIS_USERNAME
export const redisPassword = process.env.REDIS_PASSWORD
export const redisSocketPrefix = process.env.REDIS_SOCKET_PREFIX

export const taskRunnerEnabled = process.env.TASK_RUNNER_ENABLED === 'true'
export const rabbitmqUseSsl = process.env.RABBITMQ_USE_SSL === 'true'
export const rabbitmqHost = process.env.RABBITMQ_HOST
export const rabbitmqPort = Number(process.env.RABBITMQ_PORT)
export const rabbitmqVhost = process.env.RABBITMQ_VHOST ?? '/'
export const rabbitmqQueue = process.env.RABBITMQ_QUEUE

export const mockSsoPort = process.env.MOCK_SSO_PORT
export const mockUserId = process.env.MOCK_USER_ID
export const mockUpn = process.env.MOCK_UPN
export const mockName = process.env.MOCK_NAME
export const mockDisplayName = process.env.MOCK_DISPLAY_NAME
export const mockIsBI = process.env.MOCK_IS_BI

export const dbSSLCertName = process.env.DB_SSLCERT_NAME
export const dbSSLKeyName = process.env.DB_SSLKEY_NAME
export const dbSSLCertData = process.env.DB_SSLCERT_DATA
export const dbSSLKeyData = process.env.DB_SSLKEY_DATA
export const dbUseSSL = process.env.DB_USE_SSL

export const messageRelayUrl = process.env.MESSAGE_RELAY_URL
export const messageRelayToken = process.env.MESSAGE_RELAY_TOKEN
export const biChatChannelName = process.env.BI_CHAT_CHANNEL_NAME

export const notificationTemplate = process.env.NOTIFICATION_TEMPLATE
export const vectorUrl = process.env.VECTOR_URL
export const chatUrl = process.env.VITE_CHAT_URL
export const VITE_CHAT_URL = process.env.VITE_CHAT_URL

export const mirageEnabled = process.env.MIRAGE_ENABLED === 'true'
export const mirageUrl = process.env.MIRAGE_URL
export const mirageKey = process.env.MIRAGE_KEY
export const mirageVersion = process.env.MIRAGE_VERSION

export const projectChatUrl = process.env.VITE_CHAT_URL && process.env.VITE_CHAT_CHANNEL
  ? new URL(`/channel/${process.env.VITE_CHAT_CHANNEL}`, process.env.VITE_CHAT_URL).href
  : undefined