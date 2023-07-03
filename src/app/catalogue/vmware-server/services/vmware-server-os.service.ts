import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable,filter } from 'rxjs';
import { NGXLogger } from 'ngx-logger'; // import the logger
import { VmwareServerOs } from '../interfaces/vmware-server';

@Injectable({
  providedIn: 'root'
})
export class VmwareServerOsService {
  
  private vmwareServerOsSubject = new BehaviorSubject<VmwareServerOs>(null);

  constructor(private logger: NGXLogger) {} // inject the logger

  setVmwareServerOs(size: VmwareServerOs) {
    this.vmwareServerOsSubject.next(size);
    this.logger.info('Updated VMware server OS selection', size); // log the updated value
  }

  getVmwareServerOs() {
    return this.vmwareServerOsSubject.asObservable();
  }

  getCurrentValue() {
    const currentValue = this.vmwareServerOsSubject.getValue();
    this.logger.debug('Retrieved current value of VMware server OS', currentValue); // log the current value
    return currentValue
  }

  getPopulatedValue(): Observable<VmwareServerOs> {
    return this.vmwareServerOsSubject.asObservable().pipe(
      filter(value => value !== null)
    );
  }

  get currentVmwareServerOs() : any{
    return this.vmwareServerOsSubject.value
  }
}
