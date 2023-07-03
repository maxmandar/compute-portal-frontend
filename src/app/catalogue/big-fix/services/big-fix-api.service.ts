import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class BigFixApiService {

  private readonly API_URL = 'http://localhost:8000/api';

  constructor(
    private httpClient:HttpClient,
    private logger: NGXLogger
  ) { }

  getBigFixCost(isBigFixRequired: boolean): Observable<any[]> {
    const params = { 
      is_bigfix_required: isBigFixRequired
    };
    this.logger.info('Fetching BigFix cost for', params);

    return this.httpClient.post<any[]>(`${this.API_URL}/cost/calculate-bigfix-cost/`, params);
  }

}
