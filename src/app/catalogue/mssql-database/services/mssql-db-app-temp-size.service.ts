import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class MssqlDbAppTempSizeService {

  private mssqlAppTempSizeSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  constructor(private logger: NGXLogger) { }

  setAppTempSize(size: number): void {
    this.mssqlAppTempSizeSubject.next(size);
    this.logger.info(`Set app temp size to ${size}`);
  }

  getAppTempSize(): Observable<number> {
    return this.mssqlAppTempSizeSubject.asObservable();
  }

  get currentAppTempSize(): number {
    return this.mssqlAppTempSizeSubject.value;
  }
}
