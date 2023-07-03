import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';



import { LayerComponent } from './layer/components/layer/layer.component';
import { EnvironmentComponent } from './environment/components/environment/environment.component';
import { SanStorageTypeComponent } from './san-storage/components/san-storage-type/san-storage-type.component';
import { ServerDetailComponent } from './server-detail/components/server-detail/server-detail.component';
import { VmwareServerSizeComponent } from './vmware-server/components/vmware-server-size/vmware-server-size.component';
import { VmwareServerOsComponent } from './vmware-server/components/vmware-server-os/vmware-server-os.component';
import { NasStorageSizeComponent } from './nas-storage/components/nas-storage-size/nas-storage-size.component';
import { SanStorageAppBinarySizeComponent } from './san-storage/components/san-storage-app-binary-size/san-storage-app-binary-size.component';
import { SanStorageAppDataLogSizeComponent } from './san-storage/components/san-storage-app-data-log-size/san-storage-app-data-log-size.component';
import { ConnectDirectComponent } from './connect-direct/components/connect-direct/connect-direct.component';
import { BigFixComponent } from './big-fix/components/big-fix/big-fix.component';
import { VmwareServerExtraRamComponent } from './vmware-server/components/vmware-server-extra-ram/vmware-server-extra-ram.component';



@NgModule({
  declarations: [
    EnvironmentComponent,
    LayerComponent,
    SanStorageTypeComponent,
    ServerDetailComponent,
    VmwareServerSizeComponent,
    VmwareServerOsComponent,
    NasStorageSizeComponent,
    SanStorageAppBinarySizeComponent,
    SanStorageAppDataLogSizeComponent,
    ConnectDirectComponent,
    BigFixComponent,
    VmwareServerExtraRamComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

  ]  ,
  exports: [
    EnvironmentComponent,
    LayerComponent,
    SanStorageTypeComponent,
    ServerDetailComponent,
    VmwareServerSizeComponent,
    VmwareServerOsComponent,
    NasStorageSizeComponent,
    SanStorageAppBinarySizeComponent,
    SanStorageAppDataLogSizeComponent,
    ConnectDirectComponent,
    BigFixComponent,
    VmwareServerExtraRamComponent,
    

  ]
})
export class CatalogueModule { }
