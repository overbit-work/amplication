import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { TemplateListRelationFilter } from "../template/TemplateListRelationFilter";

export type ModelWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  templates?: TemplateListRelationFilter;
  updatedAt?: DateTimeFilter;
};
