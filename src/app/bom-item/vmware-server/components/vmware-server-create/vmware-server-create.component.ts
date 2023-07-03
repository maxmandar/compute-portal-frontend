import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { ViewChild, OnInit, OnDestroy } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


import { LayerService } from 'src/app/catalogue/layer/services/layer.service';
import { ServerDetailService } from 'src/app/catalogue/server-detail/services/server-detail.service';

import { SanStorageAppBinaryCostService } from 'src/app/catalogue/san-storage/services/san-storage-app-binary-cost.service';
import { SanStorageAppBinarySizeService } from 'src/app/catalogue/san-storage/services/san-storage-app-binary-size.service';

import { SanStorageAppDataLogSizeService } from 'src/app/catalogue/san-storage/services/san-storage-app-data-log-size.service';
import { SanStorageAppDataLogCostService } from 'src/app/catalogue/san-storage/services/san-storage-app-data-log-cost.service';

import { SanStorageTypeService } from 'src/app/catalogue/san-storage/services/san-storage-type.service';

import { EnvironmentService } from 'src/app/catalogue/environment/services/environment.service';
import { VmwareServerOsCostService } from 'src/app/catalogue/vmware-server/services/vmware-server-os-cost.service';
import { VmwareServerOsService } from 'src/app/catalogue/vmware-server/services/vmware-server-os.service';
import { VmwareServerSizeService } from 'src/app/catalogue/vmware-server/services/vmware-server-size.service';
import { VmwareServerSizeCostService } from 'src/app/catalogue/vmware-server/services/vmware-server-size-cost.service';

import { BigFixService } from 'src/app/catalogue/big-fix/services/big-fix.service';
import { BigFixCostService } from 'src/app/catalogue/big-fix/services/big-fix-cost.service';

import { VmwareServerExtraRamService } from 'src/app/catalogue/vmware-server/services/vmware-server-extra-ram.service';
import { VmwareServerExtraRamCostService } from 'src/app/catalogue/vmware-server/services/vmware-server-extra-ram-cost.service';



@Component({
  selector: 'app-vmware-server-create',
  templateUrl: './vmware-server-create.component.html',
  styleUrls: ['./vmware-server-create.component.css']
})
export class VmwareServerCreateComponent implements OnInit, OnDestroy {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  isAccordionExpanded = false;
  addNasStorageControl = new FormControl(false);
  isFormValid$: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(
    private logger: NGXLogger,
    private layerService:LayerService,
    private serverDetailService:ServerDetailService,
    private sanStorageAppBinaryCostService:SanStorageAppBinaryCostService,
    private sanStorageAppBinarySizeService: SanStorageAppBinarySizeService,
    private sanStorageAppDataLogSizeService:SanStorageAppDataLogSizeService,
    private sanStorageAppDataLogCostService:SanStorageAppDataLogCostService,
    private sanStorageTypeService: SanStorageTypeService,
    private environmentService: EnvironmentService,
    private vmwareServerOsCostService:VmwareServerOsCostService,
    private vmwareServerOsService:VmwareServerOsService,
    private vmwareServerSizeService:VmwareServerSizeService,
    private vmwareServerSizeCostService:VmwareServerSizeCostService,
    private bigFixService:BigFixService,
    private bigFixCostService:BigFixCostService,
    private vmwareServerExtraRamService:VmwareServerExtraRamService,
    private vmwareServerExtraRamCostService:VmwareServerExtraRamCostService,




  ) { }

  ngOnInit(): void {
    this.calculateSanStorageAppBinaryCost()
    this.calculateSanStorageAppDataLogCost()
    this.calculateVmwareOsCost()
    this.calculateVmwareSizeCost()
    this.calculateBigFixCost()
    this.calculateVmwareServerAddRamCost()
    this.trackFormValidity()

   }

  ngOnDestroy(): void { }


  calculateSanStorageAppBinaryCost(){
    combineLatest([
      this.sanStorageAppBinarySizeService.getAppBinarySizeWhenPopulated(),
      this.environmentService.getSelectedEnvironmentWhenPopulated(),
      this.sanStorageTypeService.getStorageTypeWhenPopulated(),
      this.sanStorageTypeService.getRoleSwapWhenPopulated()
    ])
    .pipe(
      map(([appBinarySize, environment, storageType, isRoleSwap]) => {
        // Run your cost calculation logic here with appBinarySize, environment, storageType and isRoleSwap
        this.logger.info("Calculate San Storage App Binary cost in vmware server cost component for", appBinarySize, environment, storageType, isRoleSwap);
        this.sanStorageAppBinaryCostService.setSelectedSanStorageAppBinaryCost()
      })
    ).subscribe();
  }

  calculateSanStorageAppDataLogCost(){
    combineLatest([
      this.sanStorageAppDataLogSizeService.getDataLogSizeWhenPopulated(),
      this.environmentService.getSelectedEnvironmentWhenPopulated(),
      this.sanStorageTypeService.getStorageTypeWhenPopulated(),
      this.sanStorageTypeService.getRoleSwapWhenPopulated()
    ])
    .pipe(
      map(([AppDataLogSize, environment, storageType, isRoleSwap]) => {
        // Run your cost calculation logic here with AppDataLogSize, environment, storageType and isRoleSwap
        this.logger.info("Calculate San Storage Data Log cost in vmware server cost component for", AppDataLogSize, environment, storageType, isRoleSwap);
        this.sanStorageAppDataLogCostService.setSelectedSanStorageDataLogCost()
      })
    ).subscribe();
  }

  calculateVmwareOsCost(){
    combineLatest([
      this.vmwareServerOsService.getPopulatedValue(),
      this.environmentService.getSelectedEnvironmentWhenPopulated(),
      this.sanStorageTypeService.getStorageTypeWhenPopulated(),
      this.sanStorageTypeService.getRoleSwapWhenPopulated()
    ])
    .pipe(
      map(([vmwareServerOsCode, environment, storageTypeCode, isRoleSwap]) => {
        // Run your cost calculation logic here with appBinarySize, environment, storageType and isRoleSwap
        this.logger.info("Calculate San Storage App Binary cost in vmware server cost component for", vmwareServerOsCode, environment, storageTypeCode, isRoleSwap);

        this.vmwareServerOsCostService.setSelectedVmwareServerOsCost()
      })
    ).subscribe();
  }


  calculateVmwareSizeCost(){
    this.logger.info("Initiating Calculate Vmware Size Cost")
    combineLatest([
      this.vmwareServerSizeService.getPopulatedValue()
    ])
    .pipe(
      map(([vmwareServerSize]) => {
        // Run your cost calculation logic here with appBinarySize, environment, storageType and isRoleSwap
        this.logger.info("Calculate Vmware Server Size Cost for", vmwareServerSize);

        this.vmwareServerSizeCostService.setSelectedVmwareServerSizeCost()
      })
    ).subscribe();
  }


  calculateBigFixCost(){
    this.logger.info("Initiating Calculate Big Fix Cost")
    combineLatest([
      this.bigFixService.getPopulatedValue()
    ])
    .pipe(
      map(([bigFixRequested]) => {
        // Run your cost calculation logic here with appBinarySize, environment, storageType and isRoleSwap
        this.logger.info("Calculate Big Fix Cost for", bigFixRequested);

        this.bigFixCostService.setSelectedBigFixCost(bigFixRequested)
      })
    ).subscribe();
  }


  calculateVmwareServerAddRamCost() {
    this.logger.info("Initiating Calculate VMware Server Extra RAM Cost")
    combineLatest([
      this.vmwareServerExtraRamService.getPopulatedValue()
    ])
    .pipe(
      map(([addRamRequested]) => {
        // Run your cost calculation logic here
        this.logger.info("Calculate VMware Server Extra RAM Cost for", addRamRequested);
  
        this.vmwareServerExtraRamCostService.setSelectedVmwareServerExtraRamCost()
      })
    ).subscribe();
  }



  private trackFormValidity(): void {
    combineLatest([
      this.environmentService.getSelectedEnvironmentWhenPopulated(),
      this.sanStorageTypeService.getStorageTypeWhenPopulated(),
      this.layerService.getSelectedLayerWhenPopulated()
      // Add other required BehaviorSubjects here
    ])
      .pipe(
        tap(([environment, storageType, layer]) => {
          // Check if all required data is populated
          const isFormValid = !!environment && !!storageType && !!layer /* && other conditions */;
          this.isFormValid$.next(isFormValid);
        })
      )
      .subscribe();
  }

























  onCreate(): void {
    if (!this.isFormValid$.value) {
      // If the form is not valid, do nothing
      return;
    }
  
    const payload = {
      environment: this.environmentService.currentEnvironment,
      layer: this.layerService.currentLayer,
      detail: this.serverDetailService.currentValue,
      storageRoleSwap: this.sanStorageTypeService.currentRoleSwapValue,
      storageType: this.sanStorageTypeService.currentStorageType,
      app_binary_size: this.sanStorageAppBinarySizeService.currentAppBinarySize,
      app_binary_cost: this.sanStorageAppBinaryCostService.currentAppBinaryCost,
      os: this.vmwareServerOsService.currentVmwareServerOs,
      os_cost: this.vmwareServerOsCostService.currentVmwareServerOsCost
  

      // Add other required fields from their respective BehaviorSubjects
    };
  
    console.log("payload:", payload)
   
  }

  onCancel(): void{
    
  }

  toggleAccordion() {
    if (this.isAccordionExpanded) {
      this.accordion.closeAll();
    } else {
      this.accordion.openAll();
    }
    this.isAccordionExpanded = !this.isAccordionExpanded;
  }

}
