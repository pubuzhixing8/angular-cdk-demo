import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskEntity } from 'src/app/entity/task-entity';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class TaskDetailComponent implements OnInit {
  task: TaskEntity;

  constructor() {}

  ngOnInit() {}
}
