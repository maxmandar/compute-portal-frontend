import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MssqlDbAppTempCostApiService } from './mssql-db-app-temp-cost-api.service';

@Injectable({
  providedIn: 'root'
})
export class MssqlDbAppTempCostService {

  private mssqlAppTempCostSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
 
  constructor(private mssqlDbAppTempCostApiService: MssqlDbAppTempCostApiService) { }

  setAppTempCost(
    fileSize :any,
    environment:any,
    sanStorageType:any ,
    sanStorageRoleSwap:any
  ): void {
    this.mssqlDbAppTempCostApiService.getCost(fileSize, environment, sanStorageType, sanStorageRoleSwap).subscribe((cost: any) => {
      console.log("Received from backend", cost)
      this.mssqlAppTempCostSubject.next(cost);
    });
  }







  getAppTempCost(): Observable<any> {
    return this.mssqlAppTempCostSubject.asObservable();
  }

  get currentAppTempCost(): any {
    return this.mssqlAppTempCostSubject.value;
  }
}
