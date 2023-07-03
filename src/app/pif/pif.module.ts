import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PifListComponent } from './components/pif-list/pif-list.component';
import { PifDetailComponent } from './components/pif-detail/pif-detail.component';
import { PifCreateComponent } from './components/pif-create/pif-create.component';
import { PifUpdateComponent } from './components/pif-update/pif-update.component';
import { PifDeleteComponent } from './components/pif-delete/pif-delete.component';

import { PifRoutingModule } from './pif-routing.module'; // <-- import the routing module here



@NgModule({
  declarations: [
    PifListComponent,
    PifDetailComponent,
    PifCreateComponent,
    PifUpdateComponent,
    PifDeleteComponent 
  ],
  imports: [
    CommonModule,
    PifRoutingModule // <-- add the routing module here
  ]
})
export class PifModule { }
