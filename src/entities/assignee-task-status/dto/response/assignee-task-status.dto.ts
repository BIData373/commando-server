import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AssigneeTaskStatusDto {
  @Expose()
  taskId: number;

  @Expose()
  assigneeId: number;

  @Expose()
  statusId: number;
}
