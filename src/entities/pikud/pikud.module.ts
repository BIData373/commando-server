import { Module } from '@nestjs/common';
import { PikudController } from './pikud.controller';
import { PikudService } from './pikud.service';

@Module({
  controllers: [PikudController],
  providers: [PikudService],
})
export class PikudModule {}
