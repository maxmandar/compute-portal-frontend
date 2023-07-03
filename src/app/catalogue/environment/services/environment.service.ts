import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Environment } from '../interfaces/environment';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private selectedEnvironmentSubject = new BehaviorSubject<Environment>(null);

  constructor(private logger: NGXLogger) { }

  setSelectedEnvironment(environment: Environment): void {
    this.selectedEnvironmentSubject.next(environment);
    this.logger.info('Selected environment: ', environment);
  }

  getSelectedEnvironment() {
    return this.selectedEnvironmentSubject.asObservable();
  }

  get currentEnvironment(): Environment {
    return this.selectedEnvironmentSubject.value;
  }

  getSelectedEnvironmentWhenPopulated(): Observable<Environment> {
    return this.selectedEnvironmentSubject.asObservable().pipe(
      filter(value => value !== null)
    );
  }
}
