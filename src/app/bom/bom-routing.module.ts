import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BomOverviewComponent } from './components/bom-overview/bom-overview.component';
import { BomCreateComponent } from './components/bom-create/bom-create.component';
import { BomDetailComponent } from './components/bom-detail/bom-detail.component';
import { BomUpdateComponent } from './components/bom-update/bom-update.component';
import { BomListComponent } from './components/bom-list/bom-list.component';



const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: BomOverviewComponent },
  { path: 'list', component: BomListComponent },
  { path: 'create', component: BomCreateComponent },
  { path: 'update/:id', component: BomUpdateComponent },
  {
    path: 'detail/:id', component: BomDetailComponent, children: [
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BomRoutingModule { }
