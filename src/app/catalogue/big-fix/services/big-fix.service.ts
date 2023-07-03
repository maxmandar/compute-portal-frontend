import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, filter } from 'rxjs';
import { NGXLogger } from 'ngx-logger'; // import the logger

@Injectable({
  providedIn: 'root'
})
export class BigFixService {

  private bigFixRequestedSubject = new BehaviorSubject<boolean>(false);

  constructor(private logger: NGXLogger) { } // inject the logger

  setBigFixRequested(requested: boolean) {
    this.bigFixRequestedSubject.next(requested);
    this.logger.info('Updated BigFix request', requested); // log the updated value
  }

  getBigFixRequested() {
    return this.bigFixRequestedSubject.asObservable();
  }

  getCurrentValue() {
    const currentValue = this.bigFixRequestedSubject.getValue();
    this.logger.debug('Retrieved current value of BigFix request', currentValue); // log the current value
    return currentValue
  }

  getPopulatedValue(): Observable<boolean> {
    return this.bigFixRequestedSubject.asObservable().pipe(
      filter(value => value !== false)
    );
  }

  get currentBigFixRequested(): any {
    return this.bigFixRequestedSubject.value
  }
}
