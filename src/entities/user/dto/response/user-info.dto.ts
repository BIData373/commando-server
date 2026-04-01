import { Exclude, Expose } from "class-transformer";
import { IdDto } from "../../../../common/dto/response/id.dto";
import { IUserInfo } from "../../../../types";

@Exclude()
export class UserInfoDto extends IdDto implements IUserInfo {
    @Expose()
    upn: string;

    @Expose()
    name: string;

    @Expose()
    displayName: string;

    @Expose()
    isBI: boolean;
}
