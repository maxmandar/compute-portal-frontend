import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SanStorageAppDataLogSizeService {

  private sanStorageDataLogSizeSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  constructor(private logger: NGXLogger) { }

  setDataLogSize(size: number): void {
    this.logger.log('Setting data log size to:', size);
    this.sanStorageDataLogSizeSubject.next(size);
  }

  getDataLogSize(): Observable<number> {
    return this.sanStorageDataLogSizeSubject.asObservable();
  }

  getDataLogSizeWhenPopulated(): Observable<number> {
    return this.sanStorageDataLogSizeSubject.asObservable().pipe(
      filter(value => value !== null)
    );
  }

  get currentDataLogSize(): number {
    return this.sanStorageDataLogSizeSubject.value;
  }
}
