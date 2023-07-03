import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { MssqlDbTransLogCostApiService } from './mssql-db-trans-log-cost-api.service';

@Injectable({
  providedIn: 'root'
})
export class MssqlDbTransLogCostService {

  private mssqlTransLogCostSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
 
  constructor(private mssqlDbTransLogCostApiService: MssqlDbTransLogCostApiService) { }

  setTransLogCost(
    fileSize :any,
    environment:any,
    sanStorageType:any ,
    sanStorageRoleSwap:any
  ): void {
    this.mssqlDbTransLogCostApiService.getCost(fileSize, environment, sanStorageType, sanStorageRoleSwap).subscribe((cost: any) => {
      console.log("Received from backend", cost)
      this.mssqlTransLogCostSubject.next(cost);
    });
  }







  getTransLogCost(): Observable<any> {
    return this.mssqlTransLogCostSubject.asObservable();
  }

  get currentTransLogCost(): any {
    return this.mssqlTransLogCostSubject.value;
  }
}
