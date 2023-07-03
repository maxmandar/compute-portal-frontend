import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasStorageSizeComponent } from './components/nas-storage-size/nas-storage-size.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [
    NasStorageSizeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    NasStorageSizeComponent
  ]
})
export class NasStorageModule { }


