import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MssqlDbTransLogCostApiService {

  private apiURL = 'http://localhost:8000/api/'

  constructor(private http: HttpClient) { }

  getCost(
    fileSize: any,
    environment: any,
    sanStorageType: any,
    sanStorageRoleSwap: any
  ): Observable<any> {
    const data = {
      'mssql_db_trans_log_size': fileSize,
      'environment': environment,
      'san_storage_type': sanStorageType,
      'san_storage_role_swap': sanStorageRoleSwap
    };

    const url = `${this.apiURL}mssql_db_trans_log_cost/`;

    console.log("Sent request to backend", data)

    return this.http.post<any>(url, data);
  }
}
