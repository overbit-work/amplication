import { Module } from "@nestjs/common";
import { ConversationTypeModuleBase } from "./base/conversationType.module.base";
import { ConversationTypeService } from "./conversationType.service";
import { ConversationTypeController } from "./conversationType.controller";
import { ConversationTypeResolver } from "./conversationType.resolver";

@Module({
  imports: [ConversationTypeModuleBase],
  controllers: [ConversationTypeController],
  providers: [ConversationTypeService, ConversationTypeResolver],
  exports: [ConversationTypeService],
})
export class ConversationTypeModule {}
