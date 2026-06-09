import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { join } from 'path';

export function getSSLDatabaseURL() {
  const cwd = process.cwd()
  const connectionString = new URL(process.env.DATABASE_URL!)

  if (process.env.DB_USE_SSL === 'true') {
    writeFileSync(join(cwd, process.env.DB_SSLCERT_NAME!), `${process.env.DB_SSLCERT_DATA}`, 'utf8')
    execSync(`chmod 755 ${process.env.DB_SSLCERT_NAME!}`)

    writeFileSync(join(cwd, process.env.DB_SSLKEY_NAME!), `${process.env.DB_SSLKEY_DATA}`, 'utf8')
    execSync(`chmod 755 ${process.env.DB_SSLKEY_NAME!}`)

    const sslCertName = process.env.DB_SSLCERT_NAME!
    const sslKeyName = process.env.DB_SSLKEY_NAME!

    connectionString.searchParams.set('sslmode', 'require')
    connectionString.searchParams.set("sslcert", join(cwd, sslCertName));
    connectionString.searchParams.set("sslkey", join(cwd, sslKeyName));
  }

  return connectionString.toString()
}