import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { decodeMulterFilename } from '../../common/functions/string';
import { PrismaService } from '../../common/prisma.service';
import { Prisma, SourceAttachment, User } from '../../types/prisma';
import { viewerTypes } from '../permission/consts/permission-types';
import { S3Service } from '../s3/s3.service';
import { UserInfo } from '../user/types/user-info.type';
import { CreateSourceAttachmentDto } from './dto/request/create-source-attachment.dto';
import { UpdateSourceAttachmentDto } from './dto/request/update-source-attachment.dto';

@Injectable()
export class SourceAttachmentService {
  static readonly folder = 'sources';

  static readonly include = {
    createdBy: true,
    updatedBy: true
  } satisfies Prisma.SourceAttachmentInclude;

  static accessibleWhere({ id: userId, info }: Pick<User, 'id'> & { info: Pick<UserInfo, 'isBI'> | null }) {
    if (info?.isBI) {
      return {} satisfies Prisma.SourceAttachmentWhereInput;
    }

    return {
      OR: [
        {
          source: {
            workspace: {
              permissions: { some: { userId, type: { in: viewerTypes } } }
            }
          }
        },
        {
          visibleToAssignees: true,
          source: {
            draft: false,
            tasks: {
              some: {
                deletedAt: null,
                assigneeStatuses: {
                  some: {
                    assignee: {
                      deletedAt: null,
                      users: { some: { userId } }
                    }
                  }
                }
              }
            }
          }
        }
      ]
    } satisfies Prisma.SourceAttachmentWhereInput;
  }

  constructor(
    private readonly prisma: PrismaService,
    private readonly s3: S3Service
  ) { }

  async upload(file: Express.Multer.File) {
    const key = await this.s3.upload(file, SourceAttachmentService.folder);

    if (!key) {
      throw new ServiceUnavailableException('Attachment upload failed');
    }

    return { key, name: decodeMulterFilename(file.originalname) };
  }

  async create(
    { sourceId, visibleToAssignees }: Omit<CreateSourceAttachmentDto, 'context' | 'attachment'>,
    file: Express.Multer.File,
    userId: number
  ) {
    const { key, name } = await this.upload(file);

    return await this.prisma.sourceAttachment.create({
      data: {
        key,
        name,
        sourceId,
        visibleToAssignees,
        createdById: userId,
        updatedById: userId
      },
      include: SourceAttachmentService.include
    });
  }

  async findOne(id: number) {
    return await this.prisma.sourceAttachment.findUnique({
      where: { id },
      include: SourceAttachmentService.include
    });
  }

  async signUrl({ key, name }: SourceAttachment) {
    return { url: await this.s3.signUrl(key, name) };
  }

  async update(id: number, dto: UpdateSourceAttachmentDto, updatedById: number) {
    return await this.prisma.sourceAttachment.update({
      where: { id },
      data: { ...dto, updatedById },
      include: SourceAttachmentService.include
    });
  }

  async remove({ id, key }: SourceAttachment) {
    const removed = await this.prisma.sourceAttachment.delete({
      where: { id },
      include: SourceAttachmentService.include
    });

    await this.s3.delete(key);

    return removed;
  }
}
