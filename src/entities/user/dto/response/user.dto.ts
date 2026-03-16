import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserDto {
  @Expose()
  id: number;

  @Expose()
  upn: string;

  @Expose()
  info?: object | null;
}
