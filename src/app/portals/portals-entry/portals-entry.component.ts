import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Injector,
  ComponentFactoryResolver,
  TemplateRef
} from '@angular/core';
import { DynamicComponentService } from '../service/dynamic-component.service';
import { TaskDetailComponent } from '../task/task-detail/task-detail.component';
import { TaskEntity } from 'src/app/entity/task-entity';
import {
  CdkPortalOutlet,
  ComponentPortal,
  PortalInjector
} from '@angular/cdk/portal';
import { TaskListComponent } from '../task/task-list/task-list.component';
import { TaskModelComponent } from '../task/task-model/task-model.component';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-portals-entry',
  templateUrl: './portals-entry.component.html',
  styleUrls: ['./portals-entry.component.scss']
})
export class PortalsEntryComponent implements OnInit {
  @ViewChild('virtualContainer', { read: ViewContainerRef })
  virtualContainer: ViewContainerRef;

  @ViewChild('virtualContainer', { read: CdkPortalOutlet })
  virtualPotalOutlet: CdkPortalOutlet;

  @ViewChild('taskListContainer', { read: ViewContainerRef })
  taskListViewContainerRef: ViewContainerRef;

  @ViewChild('taskListContainer', { read: TaskListComponent })
  taskListComponent: TaskListComponent;

  @ViewChild('customTemplate')
  customTemplate: TemplateRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    service: DynamicComponentService
  ) {}

  ngOnInit() {
    this.taskListComponent.openTask = task => {
      this.portalCreatTaskModel(task);
    };

    let flag = 0;
    const source$ = of(1, 2, 3);
    source$
      .pipe(
        map(v => {
          if (v % 2 === 0 && flag < 3) {
            throw new Error('Bad Number');
          }
          return v;
        }),
        catchError((err, caught$) => {
          flag++;
          console.log(`第${flag}次重试:${err.message}`);
          return caught$;
        })
      )
      .subscribe(console.log);
  }

  openTask() {
    const task = new TaskEntity();
    task.id = '1000';
    task.name = '写一篇关于Portals的文章';
    task.assignee = 'pubuzhixing';
    task.members = ['小建', 'tomi'];
    task.content =
      '最近阅读模态框ThyDialog实现，里面使用Portals动态创建组件，不是特别理解所以计划写一篇相关的学习文章。';
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      TaskDetailComponent
    );
    const componentRef = this.virtualContainer.createComponent<
      TaskDetailComponent
    >(componentFactory, null, this.virtualContainer.injector);
    (componentRef.instance as TaskDetailComponent).task = task; // 传递参数
  }

  renderTemplate() {
    this.virtualContainer.createEmbeddedView(this.customTemplate, {
      name: 'pubuzhixing'
    });
  }

  portalOpenTask() {
    this.virtualPotalOutlet.detach();
    const taskDetailCompoentPortal = new ComponentPortal<TaskDetailComponent>(
      TaskDetailComponent
    );
    const ref = this.virtualPotalOutlet.attach(taskDetailCompoentPortal);
    // 此处同样可以 通过ref.instance传递task参数
  }

  portalCreatTaskModel(task: TaskEntity) {
    this.virtualPotalOutlet.detach();
    const customerTokens = new WeakMap();
    customerTokens.set(TaskEntity, task);
    const portalInjector = new PortalInjector(
      this.taskListViewContainerRef.injector,
      customerTokens
    );
    const taskModelCompoentPortal = new ComponentPortal<TaskModelComponent>(
      TaskModelComponent,
      null,
      portalInjector
    );
    this.virtualPotalOutlet.attach(taskModelCompoentPortal);
  }
}
