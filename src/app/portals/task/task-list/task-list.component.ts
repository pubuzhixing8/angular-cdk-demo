import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../../service/task-list.service';
import { TaskEntity } from 'src/app/entity/task-entity';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [TaskListService]
})
export class TaskListComponent implements OnInit {
  constructor(public taskListService: TaskListService) {}

  selectedTask: TaskEntity;

  openTask = (task: TaskEntity): void => {};

  ngOnInit() {
    this.taskListService.fetchTasks();
  }

  clickTaskItem(task: TaskEntity) {
    this.selectedTask = task;
    if (this.openTask) {
      this.openTask(task);
    }
  }
}
