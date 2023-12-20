import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageWhereInput = {
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  position?: IntNullableFilter;
  role?: "User" | "System" | "Assistant";
  template?: TemplateWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
