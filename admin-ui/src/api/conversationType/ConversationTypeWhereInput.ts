import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type ConversationTypeWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  key?: StringFilter;
  template?: TemplateWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
