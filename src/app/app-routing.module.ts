import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalsEntryComponent } from './portals/portals-entry/portals-entry.component';
import { OnpushComponent } from './onpush/onpush.component';
import { OverlayComponent } from './overlay/overlay.component';

const routes: Routes = [
  {
    path: 'portals', component: PortalsEntryComponent
  },
  {
    path: 'onpush', component: OnpushComponent
  },
  {
    path: 'overlay', component: OverlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
