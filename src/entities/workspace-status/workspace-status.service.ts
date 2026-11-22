import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateWorkspaceStatusDto } from './dto/request/create-workspace-status.dto';
import { UpdateWorkspaceStatusDto } from './dto/request/update-workspace-status.dto';

@Injectable()
export class WorkspaceStatusService {
  static readonly include = {
    createdBy: true,
    updatedBy: true
  } satisfies Prisma.WorkspaceStatusInclude;

  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreateWorkspaceStatusDto, userId: number) {
    return this.prisma.workspaceStatus.create({
      data: {
        ...dto,
        createdById: userId,
        updatedById: userId
      },
      include: WorkspaceStatusService.include
    });
  }

  findAll() {
    return this.prisma.workspaceStatus.findMany({ include: WorkspaceStatusService.include });
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.workspaceStatus.findMany({
      where: { workspaceId },
      include: WorkspaceStatusService.include
    });
  }

  findOne(id: number) {
    return this.prisma.workspaceStatus.findUnique({
      where: { id },
      include: WorkspaceStatusService.include
    });
  }

  update(id: number, dto: UpdateWorkspaceStatusDto, updatedById: number) {
    return this.prisma.workspaceStatus.update({
      where: { id },
      data: { ...dto, updatedById },
      include: WorkspaceStatusService.include
    });
  }

  remove(id: number) {
    return this.prisma.workspaceStatus.delete({ where: { id } });
  }
}
