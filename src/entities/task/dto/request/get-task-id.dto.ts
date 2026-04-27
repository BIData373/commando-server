import { GetIdDto } from "../../../../common/dto/request/get-id.dto";

// FIX Add permission check
export class GetTaskIdDto extends GetIdDto('task') { }