import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

import { NasStorageSize } from '../interfaces/nas-storage';

@Injectable({
  providedIn: 'root'
})
export class NasStorageSizeService {

  private nasStorageSizeSubject = new BehaviorSubject<NasStorageSize>(null);

  constructor(private logger: NGXLogger) {}

  setNasStorageSize(size: NasStorageSize) {
    // Log the action and value being set
    this.logger.debug('Setting NAS storage size:', size);
    this.nasStorageSizeSubject.next(size);
  }

  getNasStorageSize() {
    // Log the action of getting the NAS storage size
    this.logger.debug('Getting NAS storage size');
    return this.nasStorageSizeSubject.asObservable();
  }

  getCurrentValue() {
    // Log the action of getting the current value
    this.logger.debug('Getting current value of NAS storage size');
    return this.nasStorageSizeSubject.getValue();
  }
}
