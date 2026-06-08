export function removeUpnSuffix(upn: string) {
    return upn.split('@')[0]
}