import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, timer } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { Employee } from '../interfaces/employee';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private BASE_URL = environment.BASE_URL;

  private employees$: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>(null);

  constructor(private http: HttpClient) {
    this.refreshDataPeriodically();
  }

  getEmployees(): Observable<Employee[]> {
    const cachedEmployees = this.employees$.getValue();
    if (cachedEmployees) {
      return this.employees$.asObservable();
    } else {
      return this.fetchEmployeesFromServer();
    }
  }

  private fetchEmployeesFromServer(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/api/employees/`).pipe(
      tap(employees => {
        this.employees$.next(employees);
      })
    );
  }

  private refreshDataPeriodically(): void {
    const refreshIntervalMs = 24 * 60 * 60 * 1000; // Refresh every 24 hours
    timer(0, refreshIntervalMs).pipe(
      switchMap(() => this.fetchEmployeesFromServer())
    ).subscribe();
  }
}
