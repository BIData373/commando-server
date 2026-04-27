import { GetIdDto } from "../../../../common/dto/request/get-id.dto";

// FIX Add permission check
export class GetMessageIdDto extends GetIdDto('message') { }