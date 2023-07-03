import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MariaDbCreateComponent } from './components/maria-db-create/maria-db-create.component';
import { MariaDbAppDbSizeComponent } from './components/maria-db-app-db-size/maria-db-app-db-size.component';
import { MariaDbBinLogFileSizeComponent } from './components/maria-db-bin-log-file-size/maria-db-bin-log-file-size.component';
import { MariaDbCostSummaryComponent } from './components/maria-db-cost-summary/maria-db-cost-summary.component';



@NgModule({
  declarations: [
    MariaDbCreateComponent,
    MariaDbAppDbSizeComponent,
    MariaDbBinLogFileSizeComponent,
    MariaDbCostSummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MariaDatabaseModule { }
