import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma.service';
import { CreateWorkspaceDto } from './dto/request/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/request/update-workspace.dto';

@Injectable()
export class WorkspaceService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateWorkspaceDto) {
    return this.prisma.workspace.create({ data: dto });
  }

  findAll() {
    return this.prisma.workspace.findMany({ where: { deletedAt: null } });
  }

  findOne(id: number) {
    return this.prisma.workspace.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateWorkspaceDto) {
    return this.prisma.workspace.update({ where: { id }, data: dto });
  }

  remove(id: number, deletedBy: number) {
    return this.prisma.workspace.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
