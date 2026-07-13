import { Module } from "@nestjs/common";
import { MessageRelayService } from "./message-relay.service";

@Module({
    providers: [MessageRelayService],
    exports: [MessageRelayService]
})
export class MessageRelayModule { }