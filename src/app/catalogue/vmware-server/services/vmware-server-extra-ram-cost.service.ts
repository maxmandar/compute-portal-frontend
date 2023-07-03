import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { VmwareServerApiService } from './vmware-server-api.service';
import { VmwareServerExtraRamService } from './vmware-server-extra-ram.service';
import { EnvironmentService } from '../../environment/services/environment.service';
import { SanStorageTypeService } from '../../san-storage/services/san-storage-type.service';
import { NGXLogger } from 'ngx-logger';
import { VmwareServerExtraRam } from '../interfaces/vmware-server';

@Injectable({
  providedIn: 'root'
})
export class VmwareServerExtraRamCostService {
  private vmwareServerExtraRamCostSubject = new BehaviorSubject<any | null>(null);
  private subscriptions = new Subscription();

  constructor(
    private vmwareServerApiService: VmwareServerApiService,
    private vmwareServerExtraRamService: VmwareServerExtraRamService,
    private sanStorageTypeService: SanStorageTypeService,
    private environmentService: EnvironmentService,
    private logger: NGXLogger,
  ) { }

  setSelectedVmwareServerExtraRamCost(): void {
    this.subscriptions.add(
      this.vmwareServerApiService.getVmwareServerExtraRamCost(
        this.vmwareServerExtraRamService.currentVmwareServerExtraRam)
        .pipe(
          tap(cost => {
            this.logger.info(`Selected VmwareServerExtraRamCost: ${JSON.stringify(cost)}`);
          })
        )
        .subscribe((cost) => {
          this.vmwareServerExtraRamCostSubject.next(cost);
        })
    );
  }

  getSelectedVmwareServerExtraRamCost() {
    return this.vmwareServerExtraRamCostSubject.asObservable();
  }

  public unsubscribeAll(): void {
    this.subscriptions.unsubscribe();
  }

  get currentVmwareServerExtraRamCost() : any{
    return this.vmwareServerExtraRamCostSubject.value;
  }
}
