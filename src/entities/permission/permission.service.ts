import { Injectable } from '@nestjs/common';
import { PermissionType } from '../../../prisma';
import { PrismaService } from '../../common/prisma.service';
import { CreatePermissionDto } from './dto/request/create-permission.dto';

@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreatePermissionDto) {
    return this.prisma.permission.create({ data: dto });
  }

  findAll() {
    return this.prisma.permission.findMany();
  }

  findOne(userId: number, workspaceId: number) {
    return this.prisma.permission.findUnique({
      where: { userId_workspaceId: { userId, workspaceId } },
    });
  }

  // FIX Refactor
  update(userId: number, workspaceId: number, type: PermissionType) {
    return this.prisma.permission.update({
      where: { userId_workspaceId: { userId, workspaceId } },
      data: { type },
    });
  }

  remove(userId: number, workspaceId: number) {
    return this.prisma.permission.delete({
      where: { userId_workspaceId: { userId, workspaceId } },
    });
  }
}
