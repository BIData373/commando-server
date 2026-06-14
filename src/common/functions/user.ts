export const UPN_SUFFIX = '@idf.il'

export function formatUpnForEntity(upn: string) {
  return upn.split('@')[0]?.trim().toLowerCase()
}