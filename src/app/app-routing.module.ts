import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalsEntryComponent } from './portals/portals-entry/portals-entry.component';

const routes: Routes = [
  {
    path: 'portals', component: PortalsEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
