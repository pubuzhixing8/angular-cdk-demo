import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskEntity } from 'src/app/entity/task-entity';
import { TaskListService } from '../../service/task-list.service';

@Component({
  selector: 'app-task-model',
  templateUrl: './task-model.component.html',
  styleUrls: ['./task-model.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskModelComponent implements OnInit {

  constructor(
    public task: TaskEntity,
    private taskListService: TaskListService
  ) {}

  ngOnInit() {}

  submit(name) {
    this.taskListService.creatTask(name);
  }
}
