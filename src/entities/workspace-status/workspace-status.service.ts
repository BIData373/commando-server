import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { ICreateWorkspaceStatus } from '../../types';
import { UpdateWorkspaceStatusDto } from './dto/request/update-workspace-status.dto';

@Injectable()
export class WorkspaceStatusService {
  constructor(private readonly prisma: PrismaService) { }

  create(dto: ICreateWorkspaceStatus) {
    return this.prisma.workspaceStatus.create({ data: dto });
  }

  findAll() {
    return this.prisma.workspaceStatus.findMany();
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.permission.findMany({ where: { workspaceId } });
  }

  findOne(id: number) {
    return this.prisma.workspaceStatus.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateWorkspaceStatusDto) {
    return this.prisma.workspaceStatus.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.workspaceStatus.delete({ where: { id } });
  }
}
