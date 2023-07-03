import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IidOverviewComponent } from './components/iid-overview/iid-overview.component';
import { IidListComponent } from './components/iid-list/iid-list.component'
import { IidCreateComponent } from './components/iid-create/iid-create.component';
import { IidDeleteComponent } from './components/iid-delete/iid-delete.component';
import { IidDetailComponent } from './components/iid-detail/iid-detail.component';
import { IidUpdateComponent } from './components/iid-update/iid-update.component';
import { PageNotFoundComponent } from '../layout/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'overview', component: IidOverviewComponent },
      { path: 'create/:id', component: IidCreateComponent },
      { path: 'detail/:id', component: IidDetailComponent },
      { path: 'update/:id', component: IidUpdateComponent },
      { path: 'delete/:id', component: IidDeleteComponent },
      { path: 'not-found', component: PageNotFoundComponent }, // create a route for the 404 page
      { path: '**', redirectTo: 'not-found' } // handle 404 error
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IidRoutingModule { }
