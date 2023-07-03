import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, catchError } from 'rxjs/operators';


import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class NasStorageApiService {

  private apiUrl = 'http://localhost:8000/api/'

  constructor(
    private http: HttpClient,
    private logger: NGXLogger
  ) { }


  calculateNasStorageCost(size: any, environment: any) {
    this.logger.debug('Sending request to calculate NAS storage cost:', size, environment);

    const payload = {
      size,
      environment
    };

    return this.http.post(`${this.apiUrl}calculate-nas-storage-cost/`, payload).pipe(
      tap((response) => this.logger.info('NAS storage cost calculated successfully:', response)),
      catchError((error) => {
        this.logger.error('Error occurred while calculating NAS storage cost:', error);
        throw error;
      })
    );
  }



}
