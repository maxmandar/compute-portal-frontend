import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Subscription, of } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { SanStorageApiService } from './san-storage-api.service';
import { SanStorageAppDataLogSizeService } from './san-storage-app-data-log-size.service';
import { SanStorageTypeService } from './san-storage-type.service';
import { EnvironmentService } from '../../environment/services/environment.service';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class SanStorageAppDataLogCostService {

  private sanStorageAppDataLogCostSubject = new BehaviorSubject<any | null>(null);
  private subscriptions = new Subscription();

  private sanStorageItem = "Application Data and Log Size"

  constructor(
    private sanStorageApiService: SanStorageApiService,
    private sanStorageAppDataLogSizeService: SanStorageAppDataLogSizeService,
    private sanStorageTypeService: SanStorageTypeService,
    private environmentService: EnvironmentService,
    private logger: NGXLogger,
  ) { }

  setSelectedSanStorageDataLogCost(): void {
    this.sanStorageApiService.getSanStorageCost(
      this.sanStorageAppDataLogSizeService.currentDataLogSize,
      this.sanStorageTypeService.currentStorageType,
      this.sanStorageTypeService.currentRoleSwapValue,
      this.environmentService.currentEnvironment,
      this.sanStorageItem)
      .subscribe((cost) => {
          this.sanStorageAppDataLogCostSubject.next(cost);
        })
  }


  getSelectedSanStorageAppDataLogCost() {
    return this.sanStorageAppDataLogCostSubject.asObservable();
  }


  public unsubscribeAll(): void {
    this.subscriptions.unsubscribe();
  }
}
