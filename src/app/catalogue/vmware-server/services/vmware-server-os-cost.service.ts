import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { VmwareServerApiService } from './vmware-server-api.service';
import { VmwareServerSizeService } from './vmware-server-size.service';
import { VmwareServerOsService } from './vmware-server-os.service';
import { EnvironmentService } from '../../environment/services/environment.service';
import { SanStorageTypeService } from '../../san-storage/services/san-storage-type.service';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class VmwareServerOsCostService {
  private vmwareServerOsCostSubject = new BehaviorSubject<any | null>(null);
  private subscriptions = new Subscription();

  constructor(
    private vmwareServerApiService: VmwareServerApiService,
    private vmwareServerOsService:VmwareServerOsService,
    private sanStorageTypeService: SanStorageTypeService,
    private environmentService: EnvironmentService,
    private logger: NGXLogger,
  ) { }

  setSelectedVmwareServerOsCost(): void {
    this.subscriptions.add(
      this.vmwareServerApiService.getVmwareServerOsCost(
        this.vmwareServerOsService.currentVmwareServerOs,
        this.sanStorageTypeService.currentStorageType,
        this.sanStorageTypeService.currentRoleSwapValue,
        this.environmentService.currentEnvironment)
        .pipe(
          tap(cost => {
            this.logger.info(`Selected VmwareServerOsCost: ${JSON.stringify(cost)}`);
          })
        )
        .subscribe((cost) => {
          this.vmwareServerOsCostSubject.next(cost);
        })
    );
  }

  getSelectedVmwareServerOsCost() {
    return this.vmwareServerOsCostSubject.asObservable();
  }

  public unsubscribeAll(): void {
    this.subscriptions.unsubscribe();
  }

  get currentVmwareServerOsCost() : any{
    return this.vmwareServerOsCostSubject.value
  }
}
