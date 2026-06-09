import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma, Source } from '../../types/prisma';
import { S3Service } from '../s3/s3.service';
import { CreateSourceDto } from './dto/request/create-source.dto';
import { UpdateSourceDto } from './dto/request/update-source.dto';

@Injectable()
export class SourceService {
  static readonly include: Prisma.SourceInclude = {
    tags: true
  }

  constructor(
    private readonly prisma: PrismaService,
    private readonly s3: S3Service
  ) { }

  async create(
    { tags, workspaceId, context, ...dto }: CreateSourceDto,
    userId: number,
    file?: Express.Multer.File
  ) {
    const attachmentKey = file && await this.s3.upload(file, 'sources')
    const attachmentName = file ? file.originalname : undefined

    return await this.prisma.source.create({
      data: {
        ...dto,
        workspaceId,
        attachmentKey,
        attachmentName,
        ...(tags !== undefined && ({
          tags: {
            connectOrCreate: tags.map(name => ({
              create: {
                name,
                workspaceId,
                createdBy: userId,
                updatedBy: userId
              },
              where: { name_workspaceId: { name, workspaceId } }
            }))
          }
        })),
        createdBy: userId,
        updatedBy: userId
      },
      include: SourceService.include
    });
  }

  async findInWorkspace(workspaceId: number): Promise<any[]> {
    return await this.prisma.source.findMany({
      where: { workspaceId, deletedAt: null },
      include: SourceService.include
    });
  }

  async findOne(id: number) {
    return await this.prisma.source.findUnique({
      where: { id, deletedAt: null },
      include: SourceService.include
    });
  }

  async update(
    { id, workspaceId, ...source }: Source,
    { tags, context, ...dto }: UpdateSourceDto,
    updatedBy: number,
    file?: Express.Multer.File
  ) {
    let attachmentKey: string | undefined;
    let attachmentName: string | undefined;

    if (file) {
      if (source?.attachmentKey) {
        await this.s3.delete(source.attachmentKey);
      }

      attachmentKey = await this.s3.upload(file, 'sources');
      attachmentName = file.originalname;
    }

    return await this.prisma.source.update({
      where: { id },
      data: {
        ...dto,
        attachmentKey,
        attachmentName,
        updatedBy,
        ...(tags !== undefined && {
          tags: {
            connectOrCreate: tags.map(name => ({
              create: {
                name,
                workspace: { connect: { id: workspaceId } },
                createdBy: updatedBy,
                updatedBy: updatedBy
              },
              where: { name_workspaceId: { name, workspaceId } }
            })),
            set: tags.map(name => ({ name_workspaceId: { name, workspaceId } }))
          }
        })
      },
      include: SourceService.include
    });
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.source.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: SourceService.include
    });
  }
}
