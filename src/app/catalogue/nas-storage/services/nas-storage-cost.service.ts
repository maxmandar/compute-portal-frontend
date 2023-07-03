import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { NasStorageApiService } from './nas-storage-api.service';

import { NasStorageSize } from '../interfaces/nas-storage';

import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class NasStorageCostService {

  private nasStorageCostSubject = new BehaviorSubject<any>(null);

  constructor(
    private logger: NGXLogger, 
    private nasStorageApiService: NasStorageApiService) { }


    setNasStorageCost(size: NasStorageSize, environment: any) {
      this.logger.debug('Calculating NAS storage cost for size:', size, 'and environment:', environment);
      this.nasStorageApiService.calculateNasStorageCost(size, environment)
        .subscribe(cost => {
          this.logger.debug('Updating NAS storage cost:', cost);
          this.nasStorageCostSubject.next(cost);
        });
    }

  getNasStorageCost() {
    return this.nasStorageCostSubject.asObservable();
  }

  getCurrentValue() {
    return this.nasStorageCostSubject.getValue();
  }
}
