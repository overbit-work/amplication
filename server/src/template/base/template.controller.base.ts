/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TemplateService } from "../template.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TemplateCreateInput } from "./TemplateCreateInput";
import { Template } from "./Template";
import { TemplateFindManyArgs } from "./TemplateFindManyArgs";
import { TemplateWhereUniqueInput } from "./TemplateWhereUniqueInput";
import { TemplateUpdateInput } from "./TemplateUpdateInput";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";
import { ConversationTypeFindManyArgs } from "../../conversationType/base/ConversationTypeFindManyArgs";
import { ConversationType } from "../../conversationType/base/ConversationType";
import { ConversationTypeWhereUniqueInput } from "../../conversationType/base/ConversationTypeWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TemplateControllerBase {
  constructor(
    protected readonly service: TemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Template })
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTemplate(
    @common.Body() data: TemplateCreateInput
  ): Promise<Template> {
    return await this.service.createTemplate({
      data: {
        ...data,

        model: {
          connect: data.model,
        },
      },
      select: {
        createdAt: true,
        id: true,

        model: {
          select: {
            id: true,
          },
        },

        name: true,
        params: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Template] })
  @ApiNestedQuery(TemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async templates(@common.Req() request: Request): Promise<Template[]> {
    const args = plainToClass(TemplateFindManyArgs, request.query);
    return this.service.templates({
      ...args,
      select: {
        createdAt: true,
        id: true,

        model: {
          select: {
            id: true,
          },
        },

        name: true,
        params: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Template })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async template(
    @common.Param() params: TemplateWhereUniqueInput
  ): Promise<Template | null> {
    const result = await this.service.template({
      where: params,
      select: {
        createdAt: true,
        id: true,

        model: {
          select: {
            id: true,
          },
        },

        name: true,
        params: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Template })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTemplate(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() data: TemplateUpdateInput
  ): Promise<Template | null> {
    try {
      return await this.service.updateTemplate({
        where: params,
        data: {
          ...data,

          model: {
            connect: data.model,
          },
        },
        select: {
          createdAt: true,
          id: true,

          model: {
            select: {
              id: true,
            },
          },

          name: true,
          params: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Template })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTemplate(
    @common.Param() params: TemplateWhereUniqueInput
  ): Promise<Template | null> {
    try {
      return await this.service.deleteTemplate({
        where: params,
        select: {
          createdAt: true,
          id: true,

          model: {
            select: {
              id: true,
            },
          },

          name: true,
          params: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/messages")
  @ApiNestedQuery(MessageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async findMessages(
    @common.Req() request: Request,
    @common.Param() params: TemplateWhereUniqueInput
  ): Promise<Message[]> {
    const query = plainToClass(MessageFindManyArgs, request.query);
    const results = await this.service.findMessages(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,
        position: true,
        role: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "update",
    possession: "any",
  })
  async connectMessages(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        connect: body,
      },
    };
    await this.service.updateTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "update",
    possession: "any",
  })
  async updateMessages(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        set: body,
      },
    };
    await this.service.updateTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "update",
    possession: "any",
  })
  async disconnectMessages(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        disconnect: body,
      },
    };
    await this.service.updateTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/messageTypes")
  @ApiNestedQuery(ConversationTypeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ConversationType",
    action: "read",
    possession: "any",
  })
  async findMessageTypes(
    @common.Req() request: Request,
    @common.Param() params: TemplateWhereUniqueInput
  ): Promise<ConversationType[]> {
    const query = plainToClass(ConversationTypeFindManyArgs, request.query);
    const results = await this.service.findMessageTypes(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        key: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/messageTypes")
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "update",
    possession: "any",
  })
  async connectMessageTypes(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() body: ConversationTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messageTypes: {
        connect: body,
      },
    };
    await this.service.updateTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/messageTypes")
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "update",
    possession: "any",
  })
  async updateMessageTypes(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() body: ConversationTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messageTypes: {
        set: body,
      },
    };
    await this.service.updateTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/messageTypes")
  @nestAccessControl.UseRoles({
    resource: "Template",
    action: "update",
    possession: "any",
  })
  async disconnectMessageTypes(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() body: ConversationTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messageTypes: {
        disconnect: body,
      },
    };
    await this.service.updateTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }
}