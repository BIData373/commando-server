export const ssoEnabled = process.env.VITE_USE_SSO === 'true'

export const awsRegion = process.env.AWS_REGION
export const awsAccessKeyId = process.env.AWS_ACCESS_KEY_ID
export const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
export const awsS3Bucket = process.env.AWS_S3_BUCKET