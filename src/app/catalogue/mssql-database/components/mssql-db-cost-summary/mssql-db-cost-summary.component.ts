import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MssqlDbAppTempCostService } from '../../services/mssql-db-app-temp-cost.service';

import { MssqlDbTransLogCostService } from '../../services/mssql-db-trans-log-cost.service';

import { NasStorageCostService } from 'src/app/catalogue/nas-storage/services/nas-storage-cost.service';



@Component({
  selector: 'app-mssql-db-cost-summary',
  templateUrl: './mssql-db-cost-summary.component.html',
  styleUrls: ['./mssql-db-cost-summary.component.css']
})
export class MssqlDbCostSummaryComponent implements OnInit, OnDestroy {

  private mssqlDbAppTempCostSubscription: Subscription
  private mssqlDbTransLogCostSubscription: Subscription
  private nasStorageCostSubscription: Subscription

  displayedColumns: string[] = ['name', 'code', 'size', 'price', 'cost_type', 'remark'];
  dataSourceMssqlDbAppTempCost: any[] = [];
  dataSourceMssqlDbTransLogCost: any[] = [];
  dataSourceNasStorageCost: any[] = [];
  dataSourceCombined: any[] = [];
  totalCost = 0;
  totalCostCE = 0;
  totalCostAS = 0;


  constructor(
    private mssqlDbAppTempCostService: MssqlDbAppTempCostService,
    private mssqlDbTransLogCostService:MssqlDbTransLogCostService,
    private nasStorageCostService:NasStorageCostService
  ) { }

  ngOnInit(): void {

    this.getMssqlDbAppTempCost()
    this.getMssqlDbTransLogCost()
    this.getNasStorageCost()

  }


  getNasStorageCost() {
    this.nasStorageCostSubscription = this.nasStorageCostService.getNasStorageCost().subscribe(
      (nasStorageCost: any) =>{
        if(nasStorageCost){
          // Remove Previous selection
          this.dataSourceNasStorageCost = [];
          // Add new selection
          // this.dataSourceMssqlDbAppTempCost.push(nasStorageCost);
          this.dataSourceNasStorageCost = [nasStorageCost];
        } else{
          //clear Table if no selection
          this.dataSourceNasStorageCost = [];
        }

        this.updateCombinedDataSource();

      }
    )

  }



  getMssqlDbAppTempCost() {
    this.mssqlDbAppTempCostSubscription = this.mssqlDbAppTempCostService.getAppTempCost().subscribe(
      (mssqlDbAppTempCost: any) =>{
        if(mssqlDbAppTempCost){
          // Remove Previous selection
          this.dataSourceMssqlDbAppTempCost = [];
          // Add new selection
          // this.dataSourceMssqlDbAppTempCost.push(mssqlDbAppTempCost);
          this.dataSourceMssqlDbAppTempCost = [mssqlDbAppTempCost];
        } else{
          //clear Table if no selection
          this.dataSourceMssqlDbAppTempCost = [];
        }

        this.updateCombinedDataSource();

      }
    )

  }

  getMssqlDbTransLogCost() {
    this.mssqlDbTransLogCostSubscription = this.mssqlDbTransLogCostService.getTransLogCost().subscribe(
      (mssqlDbTransLogCost: any) =>{
        if(mssqlDbTransLogCost){
          // Remove Previous selection
          this.dataSourceMssqlDbTransLogCost = [];
          // Add new selection
          // this.dataSourceMssqlDbTransLogCost.push(mssqlDbTransLogCost);
          this.dataSourceMssqlDbTransLogCost = [mssqlDbTransLogCost];
        } else{
          //clear Table if no selection
          this.dataSourceMssqlDbTransLogCost = [];
        }

        this.updateCombinedDataSource();

      }
    )

  }


  updateCombinedDataSource() {
    this.dataSourceCombined = [
      ...this.dataSourceMssqlDbAppTempCost.flatMap(item => item),
      ...this.dataSourceMssqlDbTransLogCost.flatMap(item => item),
      ...this.dataSourceNasStorageCost.flatMap(item => item)
    ];

    this.calculateCosts()
  }

   // Update the calculateCosts() method to update the values in the service
   calculateCosts() {
    this.totalCost = 0;
    this.totalCostCE = 0;
    this.totalCostAS = 0;

    this.dataSourceCombined.forEach(item => {
      this.totalCost += item.price;
      if (item.cost_type === 'Hardware (CE)') {
        this.totalCostCE += item.price;
      } else if (item.cost_type === 'Software (AS)') {
        this.totalCostAS += item.price;
      }
    });

     // Update the values in the service
  // this.totalCostService.updateTotalCostCE(this.totalCostCE);
  // this.totalCostService.updateTotalCostAS(this.totalCostAS);
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.dataSourceCombined.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  ngOnDestroy(): void {
    this.mssqlDbAppTempCostSubscription.unsubscribe();
    this.mssqlDbTransLogCostSubscription.unsubscribe();
  }

}
