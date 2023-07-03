import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerDetailService {

  private serverDetailSubject = new BehaviorSubject<string>(null);

  constructor(private logger: NGXLogger) {}

  setServerDetail(detail: string) {
    this.serverDetailSubject.next(detail);
    this.logger.info('Server detail set:', detail);
  }

  getServerDetail() {
    this.logger.debug('Getting server detail as Observable');
    return this.serverDetailSubject.asObservable();
  }

  getCurrentValue() {
    this.logger.debug('Getting current server detail value');
    return this.serverDetailSubject.getValue();
  }

  get currentValue(): any {
    return this.serverDetailSubject.value;
  }

}
