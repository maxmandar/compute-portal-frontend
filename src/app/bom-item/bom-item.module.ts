import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { CatalogueModule } from '../catalogue/catalogue.module';
import { VmwareServerCreateComponent } from './vmware-server/components/vmware-server-create/vmware-server-create.component';
import { VmwareServerCostComponent } from './vmware-server/components/vmware-server-cost/vmware-server-cost.component';
import { BomItemCreateComponent } from './components/bom-item-create/bom-item-create.component';


@NgModule({
  declarations: [
    VmwareServerCreateComponent,
    VmwareServerCostComponent,
    BomItemCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CatalogueModule
  ],
  exports: [
    BomItemCreateComponent
  ]
})
export class BomItemModule { }
