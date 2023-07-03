import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PifListComponent } from './components/pif-list/pif-list.component';

const routes: Routes = [
  { path: 'pif/list', component: PifListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PifRoutingModule { }
