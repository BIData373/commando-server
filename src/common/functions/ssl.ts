import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { join } from 'path';

const cwd = process.cwd()
const identityFilePath = join(cwd, 'db_identity.p12')
const identityFilePassword = 'wag-1-bruv-2'

export function saveDatabaseCertificates() {
  const certPath = process.env.DB_SSLCERT_NAME!
  const keyPath = process.env.DB_SSLKEY_NAME!

  writeFileSync(join(cwd, certPath), `${process.env.DB_SSLCERT_DATA}`, 'utf8')
  execSync(`chmod 755 ${certPath}`)

  writeFileSync(join(cwd, keyPath), `${process.env.DB_SSLKEY_DATA}`, 'utf8')
  execSync(`chmod 755 ${keyPath}`)

  execSync(`openssl pkcs12 -export -in ${certPath} -inkey ${keyPath} -out ${identityFilePath} -passout pass:${identityFilePassword}`)
  execSync(`chmod 755 ${identityFilePath}`)

}

export function addIdentityPath(databaseUrl: string) {
  const parsedUrl = new URL(databaseUrl)

  if (process.env.DB_USE_SSL === 'true') {
    saveDatabaseCertificates()

    parsedUrl.searchParams.append('sslidentity', identityFilePath)
    parsedUrl.searchParams.append('sslpassword', identityFilePassword)
  }

  return parsedUrl.toString()
}