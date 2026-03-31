import { PermissionType, HistoryAction } from './prisma';

export { PermissionType, HistoryAction };

/**
 * Strips all BE-managed fields from Prisma create/update input types.
 * Removes: id, createdAt, createdBy, updatedAt, updatedBy, deletedAt, deletedBy
 */
export type OmittedMetaFields = 'id' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy' | 'deletedAt' | 'deletedBy'
