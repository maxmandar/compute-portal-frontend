import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable,filter } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { VmwareServerSize } from '../interfaces/vmware-server';

@Injectable({
  providedIn: 'root'
})
export class VmwareServerSizeService {

  private vmwareServerSizeSubject = new BehaviorSubject<VmwareServerSize>(null);

  constructor(private logger: NGXLogger) {}

  setVmwareServerSize(size: VmwareServerSize) {
    this.vmwareServerSizeSubject.next(size);
    this.logger.info('Updated VMware server size selection', size);
  }

  getVmwareServerSize() {
    return this.vmwareServerSizeSubject.asObservable();
  }

  getCurrentValue() {
    const currentValue = this.vmwareServerSizeSubject.getValue();
    this.logger.debug('Retrieved current value of VMware server size', currentValue);
    return currentValue;
  }

  getPopulatedValue(): Observable<VmwareServerSize> {
    return this.vmwareServerSizeSubject.asObservable().pipe(
      filter(value => value !== null)
    );
  }

  get currentVmwareServerSize() : any{
    return this.vmwareServerSizeSubject.value
  }


}
