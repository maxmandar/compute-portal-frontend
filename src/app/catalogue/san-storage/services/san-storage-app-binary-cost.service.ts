import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Subscription, of } from 'rxjs';
import { Observable } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { SanStorageApiService } from './san-storage-api.service';
import { SanStorageAppBinarySizeService } from './san-storage-app-binary-size.service';
import { SanStorageTypeService } from './san-storage-type.service';
import { EnvironmentService } from '../../environment/services/environment.service';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class SanStorageAppBinaryCostService {

  private sanStorageItem = "Application Binary Size"

  private sanStorageAppBinaryCostSubject = new BehaviorSubject<any | null>(null);
  private subscriptions = new Subscription();



  constructor(
    private sanStorageApiService: SanStorageApiService,
    private sanStorageAppBinarySizeService: SanStorageAppBinarySizeService,
    private sanStorageTypeService: SanStorageTypeService,
    private environmentService: EnvironmentService,
    private logger: NGXLogger,
  ) { }



  setSelectedSanStorageAppBinaryCost(): void {
    this.sanStorageApiService.getSanStorageCost(
      this.sanStorageAppBinarySizeService.currentAppBinarySize,
      this.sanStorageTypeService.currentStorageType,
      this.sanStorageTypeService.currentRoleSwapValue,
      this.environmentService.currentEnvironment,
      this.sanStorageItem
      )
      .pipe(
        tap(cost => {
          this.logger.info(`Selected SanStorageAppBinaryCost: ${JSON.stringify(cost)}`);
        })
      )
      .subscribe((cost) => {
        this.sanStorageAppBinaryCostSubject.next(cost);
      })
  }



  getSelectedSanStorageAppBinaryCost() {
    return this.sanStorageAppBinaryCostSubject.asObservable();
  }

  public unsubscribeAll(): void {
    this.subscriptions.unsubscribe();
  }

  get currentAppBinaryCost(): number {
    return this.sanStorageAppBinaryCostSubject.value;
  }


}
