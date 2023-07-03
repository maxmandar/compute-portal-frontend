import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SanStorageTypeService {

  private sanStorageTypeSubject = new BehaviorSubject<string | null>(null);

  private roleSwapSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor() { }

  setRoleSwap(value: boolean): void {
    this.roleSwapSubject.next(value);
  }

  getRoleSwap() {
    return this.roleSwapSubject.asObservable();
  }

  get currentRoleSwapValue(): boolean {
    return this.roleSwapSubject.value;
  }

  

  setStorageType(type: any | null) {
    this.sanStorageTypeSubject.next(type);
  }
  
  getStorageType() {
    return this.sanStorageTypeSubject.asObservable();
  }

 

  get currentStorageType() : any{
    return this.sanStorageTypeSubject.value
  }

  getStorageTypeWhenPopulated(): Observable<any> {
    return this.sanStorageTypeSubject.asObservable().pipe(
      filter(value => value !== null)
    );
  }

  getRoleSwapWhenPopulated(): Observable<any> {
    return this.roleSwapSubject.asObservable().pipe(
      filter(value => value !== null)
    );
  }


  

}
