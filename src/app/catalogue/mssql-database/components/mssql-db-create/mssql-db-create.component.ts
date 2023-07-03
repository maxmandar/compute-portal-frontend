import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


import { NGXLogger } from 'ngx-logger';

import { EnvironmentService } from 'src/app/catalogue/services/environment.service';
import { SanStorageService } from 'src/app/catalogue/services/san-storage.service';

import { VmwareServerSizeService } from 'src/app/catalogue/vmware-server/services/vmware-server-size.service';
import { VmwareServerCostService } from 'src/app/catalogue/vmware-server/services/vmware-server-cost.service';

import { MssqlDbAppTempSizeService } from '../../services/mssql-db-app-temp-size.service';
import { MssqlDbAppTempCostService } from '../../services/mssql-db-app-temp-cost.service';


import { MssqlDbTransLogSizeService } from '../../services/mssql-db-trans-log-size.service';
import { MssqlDbTransLogCostService } from '../../services/mssql-db-trans-log-cost.service';

import { NasStorageCostService } from 'src/app/catalogue/nas-storage/services/nas-storage-cost.service';
import { NasStorageSizeService } from 'src/app/catalogue/nas-storage/services/nas-storage-size.service';


@Component({
  selector: 'app-mssql-db-create',
  templateUrl: './mssql-db-create.component.html',
  styleUrls: ['./mssql-db-create.component.css']
})
export class MssqlDbCreateComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  constructor(
    private logger: NGXLogger,
    private environmentService: EnvironmentService,
    private sanStorageService: SanStorageService,
    private vmwareServerSizeService: VmwareServerSizeService,
    private vmwareServerCostService: VmwareServerCostService,
    private mssqlDbAppTempSizeService: MssqlDbAppTempSizeService,
    private mssqlDbAppTempCostService: MssqlDbAppTempCostService,
    private mssqlDbTransLogCostService: MssqlDbTransLogCostService,
    private mssqlDbTransLogSizeService: MssqlDbTransLogSizeService,
    private nasStorageCostService:NasStorageCostService,
    private nasStorageSizeService:NasStorageSizeService,
    
  ) {
    this.logger.info('MssqlDbCreateComponent created');
  }

  ngOnInit() {
    this.logger.debug('MssqlDbCreateComponent initialized');
    this.trackChangeMsSqlDbAppTemp()
    this.trackChangeMsSqlDbTransLog()
    this.trackChangeVmwareServerSize()
    this.trackChangeNasStorage()
  }


  // Unsubscribe from all subscriptions
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


  trackChangeVmwareServerSize(): void {

    this.logger.info('Inside functon of trackChangeVmwareServerSize')

    this.vmwareServerSizeService
      .getVmwareServerSize()
      .pipe(takeUntil(this.destroy$))
      .subscribe((vmwareServerSize) => {
        this.logger.info('Track change of vmware Size:', vmwareServerSize);
      });
  }

  trackChangeMsSqlDbAppTemp(): void {
    this.logger.debug('Tracking changes for MsSqlDbAppTemp');
    combineLatest([
      this.mssqlDbAppTempSizeService.getAppTempSize(),
      this.environmentService.getSelectedEnvironment(),
      this.sanStorageService.getStorageType(),
      this.sanStorageService.getRoleSwap()
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        ([fileSize, environment, sanStorageType, sanStorageRoleSwap]) => {
          this.logger.info(`File size changed: ${fileSize}, Environment changed: ${environment}, SanStorage Type changed: ${sanStorageType}, SanStorage Roleswap changed: ${sanStorageRoleSwap}`);
          // Perform calculations or call methods based on the updated values
          if (fileSize !== null && fileSize !== undefined && environment && sanStorageType) {
            this.mssqlDbAppTempCostCalculate(fileSize, environment, sanStorageType, sanStorageRoleSwap);
          }

        })

  }

  trackChangeMsSqlDbTransLog(): void {
    this.logger.debug('Tracking changes for MsSqlDbTransLog');
    combineLatest([
      this.mssqlDbTransLogSizeService.getTransLogSize(),
      this.environmentService.getSelectedEnvironment(),
      this.sanStorageService.getStorageType(),
      this.sanStorageService.getRoleSwap()
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        ([fileSize, environment, sanStorageType, sanStorageRoleSwap]) => {
          this.logger.info(`File size changed: ${fileSize}, Environment changed: ${environment}, SanStorage Type changed: ${sanStorageType}, SanStorage Roleswap changed: ${sanStorageRoleSwap}`);
          // Perform calculations or call methods based on the updated values
          if (fileSize !== null && fileSize !== undefined && environment && sanStorageType) {
            this.mssqlDbTransLogCostCalculate(fileSize, environment, sanStorageType, sanStorageRoleSwap);
          }

        })

  }

  private trackChangeNasStorage(): void {
    this.logger.info('Inside function of trackChangeNasStorage')

    combineLatest([
      this.nasStorageSizeService.getNasStorageSize(),
      this.environmentService.getSelectedEnvironment(),
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([nasSize, environment]) => {
        this.logger.info('Track change of NAS Size:', nasSize, 'Environment:', environment);
        if (nasSize !== null && nasSize !== undefined && environment) {
          const nasCost = this.nasStorageCostService.setNasStorageCost(nasSize, environment);
          console.log('NAS cost:', nasCost);
        }
      });
  }
  

  private mssqlDbAppTempCostCalculate(fileSize: number, environment: any, sanStorageType: any, sanStorageRoleSwap: any): void {
    this.mssqlDbAppTempCostService.setAppTempCost(
      fileSize,
      environment,
      sanStorageType,
      sanStorageRoleSwap
    )

    console.log("calculated value:", this.mssqlDbAppTempCostService.currentAppTempCost)

  }

  private mssqlDbTransLogCostCalculate(fileSize: number, environment: any, sanStorageType: any, sanStorageRoleSwap: any): void {
    this.mssqlDbTransLogCostService.setTransLogCost(
      fileSize,
      environment,
      sanStorageType,
      sanStorageRoleSwap
    )

    console.log("calculated value:", this.mssqlDbTransLogCostService.currentTransLogCost)

  }


}


