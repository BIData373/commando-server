export const staticTokenHeader = 'static-token'
export const requestUsernameHeader = 'requestusername'
export const isBiHeader = 'is-bi'

export const excludedLogHeaders = [
    'cookie',
    'x-vercel-id',
    'x-vercel-forwarded-for',
    'x-vercel-deployment-url',
    'x-vercel-protection-bypass',
    'x-vercel-skip-toolbar',
    'x-vercel-sc-host',
    'x-vercel-sc-basepath',
    'x-vercel-proxy-signature',
    'x-vercel-proxy-signature-ts',
    'x-vercel-ip-continent',
    'x-vercel-ip-country',
    'x-vercel-oidc-token',
    'x-vercel-ip-longitude',
    'x-vercel-ip-latitude',
    'x-vercel-ip-as-number',
    'x-vercel-proxied-for',
    'x-vercel-ja4-digest',
    'x-vercel-ip-timezone',
    'x-invocation-id',
    'x-forwarded-for',
    'x-forwarded-host',
    'x-forwarded-proto',
    'x-real-ip',
].map((h) => `req.headers["${h}"]`)