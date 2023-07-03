import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module'; // add this line



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    LoginComponent,
    LogoutComponent
  ]
})
export class AuthModule { }
