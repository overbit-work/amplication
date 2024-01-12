import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConversationTypeService } from "./conversationType.service";
import { ConversationTypeControllerBase } from "./base/conversationType.controller.base";

@swagger.ApiTags("conversationTypes")
@common.Controller("conversationTypes")
export class ConversationTypeController extends ConversationTypeControllerBase {
  constructor(
    protected readonly service: ConversationTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
