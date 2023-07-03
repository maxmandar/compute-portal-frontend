import { NGXLogger } from 'ngx-logger';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { BigFixApiService } from './big-fix-api.service';

@Injectable({
  providedIn: 'root'
})
export class BigFixCostService {

  private bigFixCostSubject = new BehaviorSubject<any | null>(null);
  private subscriptions = new Subscription();

  constructor(
    private logger: NGXLogger,
    private bigFixApiService: BigFixApiService
  ) { }

  setSelectedBigFixCost(isBigFixRequired: boolean): void {
    if(isBigFixRequired){
      this.subscriptions.add(
        this.bigFixApiService.getBigFixCost(isBigFixRequired)
        .pipe(
          tap(cost => {
            this.logger.info(`Selected BigFix Cost : ${JSON.stringify(cost)}`)
          })
        ).subscribe((cost)=>{
          this.bigFixCostSubject.next(cost);
        })
      )
    }else{
      this.bigFixCostSubject.next(null);
    }
  }

  getSelectedBigFixCost() {
    return this.bigFixCostSubject.asObservable()
  }

  public unsubscribeAll(): void {
    this.subscriptions.unsubscribe();
  }

}
