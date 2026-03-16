import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma.service';
import { CreateWorkspaceStatusDto } from './dto/request/create-workspace-status.dto';
import { UpdateWorkspaceStatusDto } from './dto/request/update-workspace-status.dto';

@Injectable()
export class WorkspaceStatusService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateWorkspaceStatusDto) {
    return this.prisma.workspaceStatus.create({ data: dto });
  }

  findAll() {
    return this.prisma.workspaceStatus.findMany();
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
