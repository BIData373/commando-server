export const UPN_SUFFIX = '@idf.il'

export function removeUpnSuffix(upn: string) {
  return upn.split('@')[0]
}

export function addUpnSuffix(upn?: string) {
  return upn && (removeUpnSuffix(upn) + UPN_SUFFIX)
}

export function formatUpnForEntity(upn?: string) {
  return addUpnSuffix(upn)?.trim().toLowerCase()
}