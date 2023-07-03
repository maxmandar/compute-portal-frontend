import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { AuthguardService } from '../auth/services/authguard.service';
import { IidCreateComponent } from '../iid/components/iid-create/iid-create.component';
import { ProjectSidenavComponent } from './components/project-sidenav/project-sidenav.component';
import { BomOverviewComponent } from '../bom/components/bom-overview/bom-overview.component';
import { BomDetailComponent } from '../bom/components/bom-detail/bom-detail.component';

import { ProjectPermissionComponent } from './components/project-permission/project-permission.component';
import { ProjectSettingComponent } from './components/project-setting/project-setting.component';


const routes: Routes = [
  { 
    path: 'list', component: ProjectListComponent, canActivate: [AuthguardService] 
  },
  {
    path: ':id', 
    component: ProjectSidenavComponent ,
    // canActivate: [AuthguardService], // Authentication protection enable
    children: [
      { path: 'overview', component: ProjectDetailComponent },
      { path: 'setting', component: ProjectSettingComponent },
      { path: 'permission', component: ProjectPermissionComponent },
      { path: 'iid', loadChildren: () => import('../iid/iid.module').then(m => m.IidModule)}, // load iid module lazily
      { path: 'bom', loadChildren: () => import('../bom/bom.module').then(m => m.BomModule)}, // load iid module lazily
    ]
  }

];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
