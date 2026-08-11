export type WorkspaceRequestDetails = {
  title: string;
  urlName: string;
  icon?: string | null;
  assigneeStatusEditable?: boolean;
  chatNotification?: boolean;
  mailNotification?: boolean;
  pikudId: number;
  managers: string[];
}
