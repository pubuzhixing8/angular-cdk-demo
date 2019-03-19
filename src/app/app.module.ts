import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalsEntryComponent } from './portals/portals-entry/portals-entry.component';
import { TaskDetailComponent } from './portals/task/task-detail/task-detail.component';
import { TaskListComponent } from './portals/task/task-list/task-list.component';
import { TaskListService } from './portals/service/task-list.service';
import { TaskModelComponent } from './portals/task/task-model/task-model.component';
import { DynamicComponentService } from './portals/service/dynamic-component.service';

@NgModule({
  declarations: [
    AppComponent,
    PortalsEntryComponent,
    TaskDetailComponent,
    TaskListComponent,
    TaskModelComponent
  ],
  entryComponents: [
    TaskDetailComponent,
    TaskModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule
  ],
  providers: [
    DynamicComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
