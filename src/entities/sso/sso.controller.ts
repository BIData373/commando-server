import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ssoClientId, ssoRedirectUri, ssoSite } from '../../common/consts/env';

export const ssoParamsRoute = 'sso/params'

@Controller()
export class SsoController {
  @ApiOperation({ operationId: 'getSsoParams' })
  @Get(ssoParamsRoute)
  async getParams() {
    return {
      site: ssoSite,
      client_id: ssoClientId,
      redirect_uri: ssoRedirectUri,
      response_type: 'code',
    };
  }
}
