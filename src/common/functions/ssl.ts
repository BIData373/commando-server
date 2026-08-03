import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { join } from 'path';
import {
  dbSSLCertData,
  dbSSLCertName,
  dbSSLKeyData,
  dbSSLKeyName,
  dbUseSSL
} from '../consts/env';

const cwd = process.cwd()
const identityFilePath = join(cwd, 'db_identity.p12')
const identityFilePassword = 'wag-1-bruv-2'

export function saveDatabaseCertificates() {
  const certPath = dbSSLCertName!
  const keyPath = dbSSLKeyName!

  writeFileSync(join(cwd, certPath), `${dbSSLCertData}`, 'utf8')
  execSync(`chmod 755 ${certPath}`)

  writeFileSync(join(cwd, keyPath), `${dbSSLKeyData}`, 'utf8')
  execSync(`chmod 755 ${keyPath}`)

  execSync(`openssl pkcs12 -export -in ${certPath} -inkey ${keyPath} -out ${identityFilePath} -passout pass:${identityFilePassword}`)
  execSync(`chmod 755 ${identityFilePath}`)

}

export function addIdentityPath(databaseUrl: string) {
  const parsedUrl = new URL(databaseUrl)

  if (dbUseSSL === 'true') {
    saveDatabaseCertificates()

    parsedUrl.searchParams.append('sslidentity', identityFilePath)
    parsedUrl.searchParams.append('sslpassword', identityFilePassword)
  }

  return parsedUrl.toString()
}