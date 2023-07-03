import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BomRoutingModule } from './bom-routing.module';
import { BomCreateComponent } from './components/bom-create/bom-create.component';
import { BomDetailComponent } from './components/bom-detail/bom-detail.component';
import { BomUpdateComponent } from './components/bom-update/bom-update.component';
import { BomOverviewComponent } from './components/bom-overview/bom-overview.component';
import { BomListComponent } from './components/bom-list/bom-list.component';
import {MatStepperModule} from '@angular/material/stepper';

import { LayoutModule } from '../layout/layout.module';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';


import { CatalogueModule } from '../catalogue/catalogue.module';
import { BomResourceComponent } from './components/bom-resource/bom-resource.component';

import { MariaDatabaseModule } from './maria-database/maria-database.module';

import { BomItemModule } from '../bom-item/bom-item.module';


@NgModule({
  declarations: [
    BomCreateComponent,
    BomDetailComponent,
    BomUpdateComponent,
    BomOverviewComponent,
    BomListComponent,
    BomResourceComponent,
    
  ],
  imports: [
    CommonModule,
    BomRoutingModule,
    MatStepperModule,
    ReactiveFormsModule, // Add this line
    FormsModule,
    MaterialModule,
    LayoutModule,
    CatalogueModule,
    MariaDatabaseModule,
    BomItemModule
  ]
})
export class BomModule { }
