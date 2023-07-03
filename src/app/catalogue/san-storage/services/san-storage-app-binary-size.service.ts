import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class SanStorageAppBinarySizeService {
  private sanStorageAppBinarySizeSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null);

 

  constructor(private logger: NGXLogger) { }

  setAppBinarySize(size: number): void {
    this.sanStorageAppBinarySizeSubject.next(size);
    this.logger.log(`New binary size set to ${size}`);
  }

  getAppBinarySize(): Observable<number> {
    return this.sanStorageAppBinarySizeSubject.asObservable();
  }

  getAppBinarySizeWhenPopulated(): Observable<number> {
    return this.sanStorageAppBinarySizeSubject.asObservable().pipe(
      filter(value => value !== null)
    );
  }

  get currentAppBinarySize(): number {
    return this.sanStorageAppBinarySizeSubject.value;
  }




}
