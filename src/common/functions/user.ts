import { UserDto } from "../../entities/user/dto/response/user.dto"

export function removeUpnSuffix(upn: string) {
    return upn.split('@')[0]
}

export const validateIfNotBI = (user: UserDto) => !(user.info?.isBI ?? false)