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
import { OnpushComponent } from './onpush/onpush.component';
import { OverlayComponent } from './overlay/overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    PortalsEntryComponent,
    TaskDetailComponent,
    TaskListComponent,
    TaskModelComponent,
    OnpushComponent,
    OverlayComponent
  ],
  entryComponents: [
    TaskDetailComponent,
    TaskModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule,
    OverlayModule
  ],
  providers: [
    DynamicComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
