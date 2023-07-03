import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { NGXLogger } from 'ngx-logger'; 
import { VmwareServerExtraRam } from '../interfaces/vmware-server';

@Injectable({
  providedIn: 'root'
})
export class VmwareServerExtraRamService {
  
  private vmwareServerExtraRamSubject = new BehaviorSubject<VmwareServerExtraRam>(null);

  constructor(private logger: NGXLogger) {} // inject the logger

  setVmwareServerExtraRam(size: VmwareServerExtraRam) {
    this.vmwareServerExtraRamSubject.next(size);
    this.logger.info('Updated VMware server extra RAM', size); // log the updated value
  }

  getVmwareServerExtraRam() {
    return this.vmwareServerExtraRamSubject.asObservable();
  }

  getCurrentValue() {
    const currentValue = this.vmwareServerExtraRamSubject.getValue();
    this.logger.debug('Retrieved current value of VMware server extra RAM', currentValue); // log the current value
    return currentValue;
  }

  getPopulatedValue(): Observable<VmwareServerExtraRam> {
    return this.vmwareServerExtraRamSubject.asObservable().pipe(
      filter(value => value !== null)
    );
  }

  get currentVmwareServerExtraRam() : any{
    return this.vmwareServerExtraRamSubject.value;
  }
}
