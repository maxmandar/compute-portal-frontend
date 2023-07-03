import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { NGXLogger } from 'ngx-logger';




import { SanStorageAppBinaryCostService } from 'src/app/catalogue/san-storage/services/san-storage-app-binary-cost.service';
import { SanStorageAppDataLogCostService } from 'src/app/catalogue/san-storage/services/san-storage-app-data-log-cost.service';
import { VmwareServerOsCostService } from 'src/app/catalogue/vmware-server/services/vmware-server-os-cost.service';
import { VmwareServerSizeCostService } from 'src/app/catalogue/vmware-server/services/vmware-server-size-cost.service';

import { BigFixCostService } from 'src/app/catalogue/big-fix/services/big-fix-cost.service';

import { VmwareServerExtraRamService } from 'src/app/catalogue/vmware-server/services/vmware-server-extra-ram.service';
import { VmwareServerExtraRamCostService } from 'src/app/catalogue/vmware-server/services/vmware-server-extra-ram-cost.service';




@Component({
  selector: 'app-vmware-server-cost',
  templateUrl: './vmware-server-cost.component.html',
  styleUrls: ['./vmware-server-cost.component.css']
})
export class VmwareServerCostComponent implements OnInit, OnDestroy {


  displayedColumns: string[] = ['item', 'config', 'category', 'cost', 'type'];

  dataSourceCombined: any[] = [];
  dataSourceVmwareServerSizeCost: any[] = [];
  dataSourceOperatingSystemCost: any[] = [];
  dataSourceSanStorageAppBinaryCost: any[] = [];
  dataSourceSanStorageAppDataLogCost: any[] = [];
  dataSourceSanStorageCost: any[] = []
  dataSourceBigFixCost: any[] = []
  dataSourceVmwareServerExtraRamCost: any[] = [];




  vmwareServerCostCombined: any = {};

  private sanStorageAppBinaryCostSubscription: Subscription;
  private sanStorageAppDataLogCostSubscription: Subscription;
  private vmwareServerOsCostSubscription:Subscription;
  private vmwareServerSizeCostSubscription:Subscription;
  private bigFixCostSubscription:Subscription;
  private vmwareServerExtraRamCostSubscription:Subscription;


  constructor(
    private sanStorageAppBinaryCostService: SanStorageAppBinaryCostService,
    private sanStorageAppDataLogCostService:SanStorageAppDataLogCostService,
    private vmwareServerOsCostService:VmwareServerOsCostService,
    private vmwareServerSizeCostService:VmwareServerSizeCostService,
    private bigFixCostService:BigFixCostService,
    private http:HttpClient,
    private vmwareServerExtraRamService:VmwareServerExtraRamService,
    private vmwareServerExtraRamCostService:VmwareServerExtraRamCostService,


    private logger: NGXLogger,

  ) { }

  ngOnInit(): void {
    this.getSanStorageAppBinaryCost()
    this.getSanStorageAppDataLogCost()
    this.getVmwareServerOsCost()
    this.getVmwareServerSizeCost()
    this.getBigFixCost()
    this.getVmwareServerExtraRamCost()

  }

  ngOnDestroy(): void {
    this.sanStorageAppBinaryCostSubscription.unsubscribe()
    this.sanStorageAppDataLogCostSubscription.unsubscribe()
    this.vmwareServerOsCostSubscription.unsubscribe()
    this.vmwareServerSizeCostSubscription.unsubscribe()
    this.bigFixCostSubscription.unsubscribe()
    this.vmwareServerExtraRamCostSubscription.unsubscribe() 

  }
  

  getSanStorageAppDataLogCost() {
    this.sanStorageAppDataLogCostSubscription = this.sanStorageAppDataLogCostService.getSelectedSanStorageAppDataLogCost().subscribe(
      (sanStorageAppDataLogCost: any) => {
        if (sanStorageAppDataLogCost) {
          console.log("San Storage App Binary Cost in table", sanStorageAppDataLogCost)
          // Remove previous selection
          this.vmwareServerCostCombined['sanStorageAppDataLogCost'] = sanStorageAppDataLogCost;
        } else {
          // Clear table if no selection
          this.vmwareServerCostCombined['sanStorageAppDataLogCost'] = null;
        }

      }
    );
  }

  getSanStorageAppBinaryCost() {
    this.sanStorageAppBinaryCostSubscription = this.sanStorageAppBinaryCostService.getSelectedSanStorageAppBinaryCost().subscribe(
      (sanStorageAppBinaryCost: any) => {
        if (sanStorageAppBinaryCost) {
          console.log("San Storage App Binary Cost in table", sanStorageAppBinaryCost)
          this.dataSourceSanStorageAppBinaryCost = []
          // Remove previous selection
          this.vmwareServerCostCombined['sanStorageAppBinaryCost'] = sanStorageAppBinaryCost;
          this.dataSourceSanStorageAppBinaryCost.push(sanStorageAppBinaryCost.san_storage_cost)
          this.dataSourceSanStorageAppBinaryCost.push(sanStorageAppBinaryCost.san_storage_role_swap_cost)
          this.dataSourceSanStorageAppBinaryCost.push(sanStorageAppBinaryCost.san_storage_backup_cost)
        } else {
          // Clear table if no selection
          this.vmwareServerCostCombined['sanStorageAppBinaryCost'] = null;
          this.dataSourceSanStorageAppBinaryCost = []
        }
        this.updateCombinedDataSource();

      }
    );
  }

  getVmwareServerOsCost() {
    this.vmwareServerOsCostSubscription = this.vmwareServerOsCostService.getSelectedVmwareServerOsCost().subscribe(
      (vmwareServerOsCost: any) => {
        if (vmwareServerOsCost) {
          console.log("San Storage App Binary Cost in table", vmwareServerOsCost)
          this.dataSourceOperatingSystemCost = [];
          // Remove previous selection
          this.vmwareServerCostCombined['vmwareServerOsCost'] = vmwareServerOsCost;
          this.dataSourceOperatingSystemCost.push(vmwareServerOsCost.os_cost)
          this.dataSourceOperatingSystemCost.push(vmwareServerOsCost.os_san_storage_cost)
          this.dataSourceOperatingSystemCost.push(vmwareServerOsCost.os_san_storage_role_swap_cost)
          this.dataSourceOperatingSystemCost.push(vmwareServerOsCost.os_san_storage_backup_cost)
        } else {
          // Clear table if no selection
          this.vmwareServerCostCombined['vmwareServerOsCost'] = null;
          this.dataSourceOperatingSystemCost = [];
        }
        this.updateCombinedDataSource();
      }
    );
  }

  getVmwareServerSizeCost() {
    this.vmwareServerSizeCostSubscription = this.vmwareServerSizeCostService.getSelectedVmwareServerSizeCost().subscribe(
      (vmwareServerSizeCost: any) => {
        if (vmwareServerSizeCost) {
          console.log("Vmware Server Size Cost in table", vmwareServerSizeCost)
          this.dataSourceVmwareServerSizeCost = [];
          // Remove previous selection
          this.vmwareServerCostCombined['vmwareServerSizeCost'] = vmwareServerSizeCost;
          this.dataSourceVmwareServerSizeCost.push(vmwareServerSizeCost.vmware_server_size_cost);
        } else {
          // Clear table if no selection
          this.vmwareServerCostCombined['vmwareServerSizeCost'] = null;
          this.dataSourceVmwareServerSizeCost = [];
        }
        this.updateCombinedDataSource();

      }
    );
  }

  getBigFixCost() {
    this.bigFixCostSubscription = this.bigFixCostService.getSelectedBigFixCost().subscribe(
      (bigFixCost: any) => {
        if (bigFixCost) {
          console.log("Big Fix Cost in table", bigFixCost)
          this.dataSourceBigFixCost = []
          // Remove previous selection
          this.vmwareServerCostCombined['bigFixCost'] = bigFixCost;
          this.dataSourceBigFixCost.push(bigFixCost.bigfix_cost)
        } else {
          // Clear table if no selection
          this.vmwareServerCostCombined['bigFixCost'] = null;
          this.dataSourceBigFixCost = []
        }
        this.updateCombinedDataSource();

      }
    );
  }


  getVmwareServerExtraRamCost() {
    this.vmwareServerExtraRamCostSubscription = this.vmwareServerExtraRamCostService.getSelectedVmwareServerExtraRamCost().subscribe(
      (extraRamCost: any) => {
        if (extraRamCost) {
          console.log("Vmware Server Extra RAM Cost in table", extraRamCost)
          this.dataSourceVmwareServerExtraRamCost = []
          // Remove previous selection
          this.vmwareServerCostCombined['extraRamCost'] = extraRamCost;
          this.dataSourceVmwareServerExtraRamCost.push(extraRamCost.vmware_server_extra_ram_cost)
        } else {
          // Clear table if no selection
          this.vmwareServerCostCombined['extraRamCost'] = null;
          this.dataSourceVmwareServerExtraRamCost = []
        }
        this.updateCombinedDataSource();
      }
    );
  }



  updateCombinedDataSource() {
    this.dataSourceCombined = [
      ...this.dataSourceVmwareServerSizeCost.flatMap(item => item),
      ...this.dataSourceOperatingSystemCost.flatMap(item =>item),
      ...this.dataSourceSanStorageAppBinaryCost.flatMap(item =>item),
      ...this.dataSourceBigFixCost.flatMap(item=>item),
      ...this.dataSourceVmwareServerExtraRamCost.flatMap(item => item)
    
    ];

  }

  exportToExcel() {
    const fileName = 'vmware_server_cost.xlsx';
    this.http.get('your-backend-url/export_excel/', { responseType: 'blob' }).subscribe((response: Blob) => {

        // For other browsers
        const link = document.createElement('a');
        const url = window.URL.createObjectURL(response);
        link.href = url;
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(url);
      
    });
  }
  



}
