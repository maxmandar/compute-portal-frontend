import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module'; // add this line
import { FormsModule } from '@angular/forms'; // import the FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectSidenavComponent } from './components/project-sidenav/project-sidenav.component';
import { MatChipsModule } from '@angular/material/chips'
import { LayoutModule } from 'src/app/layout/layout.module';
import { ProjectPermissionComponent } from './components/project-permission/project-permission.component';
import { ProjectSettingComponent } from './components/project-setting/project-setting.component';
import { ProjectAddUserComponent } from './components/project-add-user/project-add-user.component';


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectCreateComponent,
    ProjectDetailComponent,
    ProjectSidenavComponent,
    ProjectPermissionComponent,
    ProjectSettingComponent,
    ProjectAddUserComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutingModule,
    MatChipsModule,
    LayoutModule,
    
  ]
})
export class ProjectModule { }
