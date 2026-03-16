import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MetaFieldsDto {
  @Expose()
  createdAt: Date;

  @Expose()
  createdBy: number;

  @Expose()
  updatedAt: Date;

  @Expose()
  updatedBy: number;

  @Expose()
  deletedAt?: Date | null;

  @Expose()
  deletedBy?: number | null;
}
