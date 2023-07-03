import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/components/login/login.component';
import { PageNotFoundComponent } from './layout/components/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // redirect to login component
  { path: 'login', component: LoginComponent },
  { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  { path: 'iid', loadChildren: () => import('./iid/iid.module').then(m => m.IidModule) }, // load iid module lazily
  { path: 'bom', loadChildren: () => import('./bom/bom.module').then(m => m.BomModule) }, // load iid module lazily
  { path: '**', component: PageNotFoundComponent } // handle 404 error
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

