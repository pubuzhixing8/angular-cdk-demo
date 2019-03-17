export class TaskEntity {
    id: string;
    name: string;
    assignee: string; // 负责人
    content: string;
    members: string[];
}
