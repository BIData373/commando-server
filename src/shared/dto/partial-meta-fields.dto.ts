import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class PartialMetaFieldsDto {
  @Expose()
  createdAt: Date;

  @Expose()
  createdBy: number;

  @Expose()
  updatedAt: Date;

  @Expose()
  updatedBy: number;
}
