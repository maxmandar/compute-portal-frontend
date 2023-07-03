import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class MssqlDbTransLogSizeService {

  private transLogSizeSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private logger: NGXLogger) { }

  setTransLogSize(size: number): void {
    this.logger.info(`Setting MSSQL database transaction log size to: ${size} MB`);
    this.transLogSizeSubject.next(size);
  }

  getTransLogSize(): Observable<number> {
    return this.transLogSizeSubject.asObservable();
  }

  getCurrentTransLogSize(): number {
    return this.transLogSizeSubject.value;
  }
}
