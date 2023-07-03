import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'src/app/shared/interfaces/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  private _selectedManager = new BehaviorSubject<Employee | null>(null);
  selectedManager$ = this._selectedManager.asObservable();

  constructor(
    private logger: NGXLogger,
    private employeeService:EmployeeService,

    ) { }

  setSelectedManager(manager: Employee) {
    this.logger.info('Setting selected manager: ', manager);
    this._selectedManager.next(manager);
  }

  getSelectedManager(): Employee | null{
    return this._selectedManager.getValue();
  }

  fetchEmployees() {
    this.logger.info('Fetching employees.');
    return this.employeeService.getEmployees();
  }

  clearSelectedManager() {
    this.logger.info('Clearing selected manager.');
    this._selectedManager.next(null);
  }
}
