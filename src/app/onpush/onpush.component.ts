import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushComponent implements OnInit {
  taskName = 'onpush模式';

  changeName() {
    this.taskName = '理解OnPush';
  }

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.changeName();
    }, 1000);
  }
}
