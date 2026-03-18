import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma.service';
import { CreatePermissionDto } from './dto/request/create-permission.dto';
import { UpdatePermissionDto } from './dto/request/update-permission.dto';

@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) {}

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
  update(userId: number, workspaceId: number, dto: UpdatePermissionDto) {
    return this.prisma.permission.update({
      where: { userId_workspaceId: { userId, workspaceId } },
      data: dto,
    });
  }

  remove(userId: number, workspaceId: number) {
    return this.prisma.permission.delete({
      where: { userId_workspaceId: { userId, workspaceId } },
    });
  }
}
