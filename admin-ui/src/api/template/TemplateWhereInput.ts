import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { ConversationTypeListRelationFilter } from "../conversationType/ConversationTypeListRelationFilter";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TemplateWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  messageTypes?: ConversationTypeListRelationFilter;
  model?: ModelWhereUniqueInput;
  name?: StringFilter;
  params?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
