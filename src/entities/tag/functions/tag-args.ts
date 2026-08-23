import { Prisma } from '../../../types/prisma';

export const tagsConnectOrCreateArgs = (
  tags: string[],
  workspaceId: number,
  userId: number
) => ({
  connectOrCreate: tags.map(name => ({
    create: {
      name,
      workspaceId,
      createdBy: userId,
      updatedBy: userId
    },
    where: { name_workspaceId: { name, workspaceId } }
  }))
} satisfies Prisma.TagCreateNestedManyWithoutTasksInput & Prisma.TagCreateNestedManyWithoutSourcesInput)

export const tagsSetOrCreateArgs = (
  tags: string[],
  workspaceId: number,
  userId: number
) => ({
  ...tagsConnectOrCreateArgs(tags, workspaceId, userId),
  set: tags.map(name => ({ name_workspaceId: { name, workspaceId } }))
} satisfies Prisma.TagUpdateManyWithoutTasksNestedInput & Prisma.TagUpdateManyWithoutSourcesNestedInput)
