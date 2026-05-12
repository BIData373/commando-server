import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { IWorkspaceContext } from "../../interfaces/workspace-context.interface";

export class GetWorkspaceUrlNameDto extends GetContextDto<IWorkspaceContext> {
  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @EntityExists('workspace', {
    contextField: 'workspace',
    findArgs: ({ value }) => {
      console.log(value);
      return { where: { urlName: value } }
    }
    // findArgs: ({ value }) => value
    //   ? ({
    //     where: { urlName: value }
    //   })
    //   : {}
  })
  urlName?: string;
}