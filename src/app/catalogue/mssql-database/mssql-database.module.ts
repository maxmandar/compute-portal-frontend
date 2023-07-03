import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { MssqlDbAppTempSizeComponent } from './components/mssql-db-app-temp-size/mssql-db-app-temp-size.component';
import { MssqlDbCreateComponent } from './components/mssql-db-create/mssql-db-create.component';
import { CatalogueModule } from '../catalogue.module';
import { MssqlDbCostSummaryComponent } from './components/mssql-db-cost-summary/mssql-db-cost-summary.component';
import { MssqlDbTransLogSizeComponent } from './components/mssql-db-trans-log-size/mssql-db-trans-log-size.component';




import { NasStorageModule } from '../nas-storage/nas-storage.module';



@NgModule({
  declarations: [
    MssqlDbAppTempSizeComponent,
    MssqlDbCreateComponent,
    MssqlDbCostSummaryComponent,
    MssqlDbTransLogSizeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CatalogueModule,
    NasStorageModule
  ]
})
export class MssqlDatabaseModule { }
