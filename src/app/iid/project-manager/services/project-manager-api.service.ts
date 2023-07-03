import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { Employee } from 'src/app/shared/interfaces/employee';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerApiService {

  private readonly API_URL = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient,
    private logger: NGXLogger,
    private snackBar: MatSnackBar
  ) { }

  /** GET employees from the server */
  getEmployees(): Observable<Employee[]> {
    this.logger.info('Fetching employees from server');
    return this.http.get<Employee[]>(`${this.API_URL}/employees/`)
      .pipe(
        tap(_ => this.logger.log('Fetched employees')),
        catchError(this.handleError.bind(this))
      );
  }

  /**
   * Handle Http operation that failed.
   * @param error - the error response from the Http request
   */
  private handleError(error: HttpErrorResponse) {
    this.logger.error('An error occurred:', error.error);
    // Open the snackbar
    this.snackBar.open('Something bad happened; please try again later.', 'Close', {
      duration: 3000,
    });
    throw new Error('Something bad happened; please try again later.');
  }
}
