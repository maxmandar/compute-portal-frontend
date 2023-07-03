import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MssqlDbAppTempCostApiService {
  private apiURL = 'http://localhost:8000/api/'

  constructor(private http: HttpClient) { }

  getCost(
    fileSize: any,
    environment: any,
    sanStorageType: any,
    sanStorageRoleSwap: any
  ): Observable<any> {
    const data = {
      'oracle_db_app_file_size': fileSize,
      'environment': environment,
      'san_storage_type': sanStorageType,
      'san_storage_role_swap': sanStorageRoleSwap
    };

    const url = `${this.apiURL}oracle_db_app_file_cost/`;

    console.log("Sent request to backend", data)

    return this.http.post<any>(url, data);
  }
}
