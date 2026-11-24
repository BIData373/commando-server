export interface TaskRegistry {
  'vector.process_document': {
    args: [sourceId: number, attachmentId: number];
    kwargs?: Record<string, unknown>
  };
}
