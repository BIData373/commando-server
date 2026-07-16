export interface TaskRegistry {
  'vector.process_document': {
    args: [sourceId: number];
    kwargs?: Record<string, unknown>
  };
}
