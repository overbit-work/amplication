import * as graphql from "@nestjs/graphql";
import { ConversationTypeResolverBase } from "./base/conversationType.resolver.base";
import { ConversationType } from "./base/ConversationType";
import { ConversationTypeService } from "./conversationType.service";

@graphql.Resolver(() => ConversationType)
export class ConversationTypeResolver extends ConversationTypeResolverBase {
  constructor(protected readonly service: ConversationTypeService) {
    super(service);
  }
}
