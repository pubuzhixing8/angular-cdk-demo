import { Injectable } from '@angular/core';
import { TaskEntity } from 'src/app/entity/task-entity';

@Injectable()
export class TaskListService {
  tasks: TaskEntity[];

  fetchTasks() {
    if (!this.tasks) {
      this.tasks = [];
      for (let index = 0; index < 5; index++) {
        const task = new TaskEntity();
        task.id = `no-${index}`;
        task.name = `task-${index}`;
        task.assignee = `pubuzhixing`;
        task.content = `我是任务详情`;
        task.members = ['小特', '十亿'];
        this.tasks.push(task);
      }
    }
  }

  creatTask(name: string) {
    const task = new TaskEntity();
    task.id = `no-6`;
    task.name = name;
    task.assignee = `pubuzhixing`;
    task.content = `自定义任务`;
    task.members = ['小特', '十亿'];
    this.tasks.push(task);
  }
}
