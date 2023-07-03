import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { VmwareServerSize, VmwareServerOs } from '../interfaces/vmware-server';
import { Environment } from '../../environment/interfaces/environment';
import { VmwareServerExtraRam } from '../interfaces/vmware-server';

import { dummyVmwareServerSize, dummyVmwareServerOs  } from '../interfaces/vmware-server';

@Injectable({
  providedIn: 'root'
})
export class VmwareServerApiService {

  private readonly API_URL = 'http://localhost:8000/api';

  constructor(
    private httpClient:HttpClient,
    private logger: NGXLogger
    ) { }

  getVmwareServerSizes(): Observable<VmwareServerSize[]> {

    return this.httpClient.get<any[]>(`${this.API_URL}/pricebook/vmware-server-size/`);

   // return this.http.get<VmwareServerSize[]>(this.apiUrl);

    // return of(dummyVmwareServerSize);// Using dummyVmwareServerSize for testing instead of making an API call
  }

  getVmwareServerOs(): Observable<VmwareServerOs[]> {
    // return this.http.get<VmwareServerSize[]>(this.apiUrl);
    return this.httpClient.get<any[]>(`${this.API_URL}/pricebook/vmware_server_os/`);
    // return of(dummyVmwareServerOs);// Using dummyVmwareServerSize for testing instead of making an API call
  }

  getVmwareServerOsCost(
    osCode: string, 
    sanStorageTypeCode?: string,
    roleSwapRequired? : boolean,
    environment?:Environment
    
    ): Observable<any[]> {
    const params = { 
      osCode: osCode, 
      roleSwapRequired: roleSwapRequired,
      sanStorageTypeCode: sanStorageTypeCode,
      environment: environment
    };
    this.logger.info('Fetching Vmware Operating System cost for', params);

  return this.httpClient.post<any[]>(`${this.API_URL}/cost/calculate-os-cost/`, params);
  }

  getVmwareServerSizeCost(
    vmwareServerSize: VmwareServerSize  
    ): Observable<any[]> {
    const params = { 
      vmwareServerSize: vmwareServerSize
    };
    this.logger.info('Fetching Vmware Server Size cost for', params);

  return this.httpClient.post<any[]>(`${this.API_URL}/cost/calculate-vmware-server-size-cost/`, params);
  }

  getVmwareServerExtraRamCost(
    vmwareServerExtraRam: VmwareServerExtraRam
  ): Observable<any> {
    
    // const endpoint = `${this.API_URL}/cost/calculate-vmware-server-add-ram-cost/`; 

    // Assuming your API takes parameters in this structure. Adjust as needed.
    const params = {
      add_ram_required: vmwareServerExtraRam
    };

    this.logger.info('Fetching Vmware Server Extra RAM cost for', params);

    // return this.httpClient.post<any[]>(endpoint, { params });
    return this.httpClient.post<any[]>(`${this.API_URL}/cost/calculate-vmware-server-add-ram-cost/`, params);
  }


}
