import { GetIdDto } from "../../../../common/dto/request/get-id.dto";
import { Tag } from "../../../../types/prisma";

export class GetTagIdDto extends GetIdDto<Tag>('tag', { context: 'tag' }) { }