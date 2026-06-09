import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { join } from 'path';

export function saveDatabaseCertificates() {
  const cwd = process.cwd()

  if (process.env.DB_USE_SSL === 'true') {
    writeFileSync(join(cwd, process.env.DB_SSLCERT_NAME!), `${process.env.DB_SSLCERT_DATA}`, 'utf8')
    execSync(`chmod 755 ${process.env.DB_SSLCERT_NAME!}`)

    writeFileSync(join(cwd, process.env.DB_SSLKEY_NAME!), `${process.env.DB_SSLKEY_DATA}`, 'utf8')
    execSync(`chmod 755 ${process.env.DB_SSLKEY_NAME!}`)
  }
}