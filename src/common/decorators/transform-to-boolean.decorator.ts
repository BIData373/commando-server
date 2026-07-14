import { Transform } from 'class-transformer';

export const TransformToBoolean = () =>
  Transform(({ value }) => value === 'true' || value === true);
