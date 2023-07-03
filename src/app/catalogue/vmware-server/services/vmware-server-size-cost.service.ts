import { NGXLogger } from 'ngx-logger';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';


import { VmwareServerApiService } from './vmware-server-api.service';
import { VmwareServerSizeService } from './vmware-server-size.service';

@Injectable({
  providedIn: 'root'
})
export class VmwareServerSizeCostService {

  private vmwareServerSizeCostSubject = new BehaviorSubject<any | null>(null);
  private subscriptions = new Subscription();

  constructor(
    private logger: NGXLogger,
    private vmwareServerApiService:VmwareServerApiService,
    private vmwareServerSizeService:VmwareServerSizeService
  ) { }

  setSelectedVmwareServerSizeCost(): void {
    this.subscriptions.add(
      this.vmwareServerApiService.getVmwareServerSizeCost(
        this.vmwareServerSizeService.currentVmwareServerSize
      )
      .pipe(
        tap(cost => {
          this.logger.info(`Selected Vmware Server Size Cost : ${JSON.stringify(cost)}`)
        })
      ).subscribe((cost)=>{
        this.vmwareServerSizeCostSubject.next(cost);
      })
    )
  }

  getSelectedVmwareServerSizeCost() {
    return this.vmwareServerSizeCostSubject.asObservable()
  }

  public unsubscribeAll(): void {
    this.subscriptions.unsubscribe();
  }

}
