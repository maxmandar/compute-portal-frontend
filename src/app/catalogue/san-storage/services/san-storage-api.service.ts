import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { Environment } from '../../environment/interfaces/environment';

@Injectable({
  providedIn: 'root'
})
export class SanStorageApiService {

  private readonly API_URL = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient, private logger: NGXLogger) { }

  getSanStorageAppBinaryCost(
    appBinarySize: number, 
    sanStorageType: string,
    roleSwapRequired?: boolean,
    environment?: Environment
  ): Observable<any[]> {
    const params: any = { 
      appBinarySize: appBinarySize, 
      sanStorageType: sanStorageType,
      roleSwapRequired: roleSwapRequired
    };
  
    if (environment !== undefined) {
      params.environment = environment;
    }
  
    this.logger.info('Fetching SAN storage application binary cost for', params);
  
    return this.httpClient.post<any[]>(`${this.API_URL}/cost/calculate-san-storage-app-binary-cost/`, params);
  }

  getSanStorageCost(
    sanStorageSize: number, 
    sanStorageType: string,
    roleSwapRequired: boolean,
    environment: Environment,
    sanStorageItem: string


  ): Observable<any[]> {
    const params: any = { 
      sanStorageSize: sanStorageSize, 
      sanStorageType: sanStorageType,
      roleSwapRequired: roleSwapRequired,
      environment: environment,
      sanStorageItem: sanStorageItem

    };
  
    if (environment !== undefined) {
      params.environment = environment;
    }
  
    this.logger.info('Fetching SAN storage for', params);
  
    return this.httpClient.post<any[]>(`${this.API_URL}/cost/calculate-san-storage-cost/`, params);
  }



  getSanStorageAppDataLogCost(
    appDataLogSize: number, 
    sanStorageType: string,
    roleSwapRequired? : boolean,
    environment?:Environment
    
    ): Observable<any[]> {
    const params = { 
      appDataLogSize: appDataLogSize, 
      roleSwapRequired: roleSwapRequired,
      sanStorageType: sanStorageType,
      environment: environment
    };
    this.logger.info('Fetching SAN storage Data and Log cost for', params);

  return this.httpClient.post<any[]>(`${this.API_URL}/cost/calculate-san-storage-app-data-log-cost/`, params);
  }


   // Add this method to fetch the list of available SAN storage types
   getSanStorageTypes(): Observable<any[]> {
    this.logger.info('Fetching SAN storage types');
    return this.httpClient.get<any[]>(`${this.API_URL}/pricebook/san_storage_type/`);
  }



}
