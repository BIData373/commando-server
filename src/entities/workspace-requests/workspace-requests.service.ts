import { Injectable } from '@nestjs/common';
import { UpdateWorkspaceRequestDto } from './dto/request/update-workspace-request.dto';
import { CreateWorkspaceRequestDto } from './dto/request/create-workspace-request.dto';
import { biChatChannelName, chatUrl, projectChatUrl } from '../../common/consts/env';
import { PrismaService } from '../../common/prisma.service';
import { PermissionType, Prisma, User, WorkspaceRequest, WorkspaceRequestStatus } from '../../types/prisma';
import { PermissionService } from '../permission/permission.service';
import { MessageRelayService } from '../services/message-relay.service';
import { UserService } from '../user/user.service';
import { CreateWorkspaceDto } from '../workspace/dto/request/create-workspace.dto';
import { WorkspaceService } from '../workspace/workspace.service';

@Injectable()
export class WorkspaceRequestsService {
  static readonly orderBy = {
    createdAt: 'desc'
  } satisfies Prisma.WorkspaceRequestOrderByWithRelationInput;

  constructor(
    private readonly prisma: PrismaService,
    private readonly messageRelayService: MessageRelayService,
    private readonly permissionService: PermissionService,
    private readonly workspaceService: WorkspaceService
  ) { }

  static formatWorkspaceRequest({ details, ...workspaceRequest }: WorkspaceRequest) {
    return { ...workspaceRequest, ...details };
  }



  async create(
    { context, ...details }: CreateWorkspaceRequestDto,
    user: User
  ) {
    const workspaceRequest = await this.prisma.workspaceRequest.create({
      data: {
        details,
        createdBy: user.id,
        updatedBy: user.id
      }
    });

    const response = WorkspaceRequestsService.formatWorkspaceRequest(workspaceRequest);

    const createdByUrl = new URL(`/direct/${encodeURIComponent(user.upn)}`, chatUrl!).href;
    const chatTitleMessage = `בקשה לפתיחת סביבה חדשה נקלטה`
    const chatBodyMessage = `מספר בקשה: *${response.id}*
הבקשה נשלחה על ידי: *[${user.upn}](${createdByUrl}) - ${user.info?.name ?? 'חסר שם'}*
שם סביבה: *${response.title}*`

    await this.messageRelayService.sendNotification([biChatChannelName!], chatTitleMessage, chatBodyMessage, process.env.BI_CHAT_CHANNEL_NAME);
    const managerTitleMessage = `בקשה חדשה לפתיחת סביבה במערכת: ווקטור`
    const managerBodyMessage = `מספר בקשה: *${response.id}*
הבקשה נשלחה על ידי: *[${user.upn}](${createdByUrl}) - ${user.info?.name ?? 'חסר שם'}*
שם סביבה: *${response.title}*
נא לשים לב כי הסביבה תהיה זמינה רק* לאחר אישור של מנהלי המערכת*
לפרטים נוספים לפנות בקבוצה בצא'ט המבצעי)(${projectChatUrl}) *681-7980*
    `

    await this.messageRelayService.sendNotification([user.upn], managerTitleMessage, managerBodyMessage);
    return response;
  }

  async findAll() {
    const workspaceRequests = await this.prisma.workspaceRequest.findMany({
      where: { deletedAt: null },
      orderBy: WorkspaceRequestsService.orderBy
    });

    return workspaceRequests.map(WorkspaceRequestsService.formatWorkspaceRequest);
  }

  async findOne(id: number) {
    const workspaceRequest = await this.prisma.workspaceRequest.findUnique({
      where: { id, deletedAt: null }
    });

    if (!workspaceRequest) {
      return null;
    }

    return WorkspaceRequestsService.formatWorkspaceRequest(workspaceRequest);
  }

  private static async approve(
    tx: Prisma.TransactionClient,
    { details }: WorkspaceRequest,
    userId: number
  ) {
    const { managers, ...workspaceDetails } = details;

    const workspace = await WorkspaceService.createTx(tx, workspaceDetails as CreateWorkspaceDto, userId);

    for (const upn of managers) {
      const user = await UserService.upsertTx(tx, { upn });

      await tx.permission.upsert({
        where: { userId_workspaceId: { userId: user.id, workspaceId: workspace.id } },
        create: { userId: user.id, workspaceId: workspace.id, type: PermissionType.MANAGER },
        update: { type: PermissionType.MANAGER }
      });
    }

    return workspace;
  }

  async update(
    id: number,
    { context, status, declineMessage, ...details }: UpdateWorkspaceRequestDto,
    updatedBy: number
  ) {
    const current = await this.prisma.workspaceRequest.findUnique({ where: { id, deletedAt: null } });

    if (!current) {
      return null;
    }

    const isDecided = (
      !!status &&
      status !== current.status &&
      status !== WorkspaceRequestStatus.PENDING
    );

    const isRejected = (status ?? current.status) === WorkspaceRequestStatus.REJECTED;

    const workspaceRequest = await this.prisma.$transaction(async tx => {
      if (isDecided && status === WorkspaceRequestStatus.APPROVED) {
        await WorkspaceRequestsService.approve(tx, current, updatedBy);
      }

      return await tx.workspaceRequest.update({
        where: { id },
        data: {
          ...(status && { status }),
          ...(isRejected && declineMessage !== undefined && { declineMessage }),
          ...(Object.keys(details).length > 0 && {
            details: { ...current.details, ...details }
          }),
          updatedBy
        }
      });
    });

    if (isDecided) {
      const isApproved = workspaceRequest.status === WorkspaceRequestStatus.APPROVED

      const titleMessage = `בקשה לפתיחת סביבה מספר ${workspaceRequest.id} ${isApproved ? 'אושרה' : 'נדחתה'}`
      const bodyMessage = `שם סביבה: *${workspaceRequest.details.title}*
${isApproved
          ? 'הסביבה נפתחה במערכת ואתם מוגדרים כמנהלים שלה'
          : `סיבת הדחייה: *${workspaceRequest.declineMessage ?? 'לא צוינה'}*`}`

      await this.messageRelayService.sendNotification(workspaceRequest.details.managers, titleMessage, bodyMessage);
    }

    return WorkspaceRequestsService.formatWorkspaceRequest(workspaceRequest);
  }

  async remove(id: number, deletedBy: number) {
    const workspaceRequest = await this.prisma.workspaceRequest.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy }
    });

    return WorkspaceRequestsService.formatWorkspaceRequest(workspaceRequest);
  }
}
