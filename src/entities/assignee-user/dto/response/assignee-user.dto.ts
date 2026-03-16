import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AssigneeUserDto {
  @Expose()
  assigneeId: number;

  @Expose()
  userId: number;
}
