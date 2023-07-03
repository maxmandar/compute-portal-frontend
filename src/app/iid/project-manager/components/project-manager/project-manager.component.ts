import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FormControl } from '@angular/forms';
import { startWith, map, debounceTime, switchMap } from 'rxjs/operators';

import { NGXLogger } from 'ngx-logger';

import { Employee } from 'src/app/shared/interfaces/employee';
import { ProjectManagerService } from '../../services/project-manager.service';



@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {

  employees$: Observable<Employee[]>
  filteredEmployees$: Observable<Employee[]>;

  selectedManager: any;


  projectManagerControl = new FormControl();

  constructor(
    private logger: NGXLogger,
    private projectManagerService: ProjectManagerService
  ) { }

      


  ngOnInit() {
    this.logger.info('ProjectManagerComponent initialized.');
    this.fetchEmployees()
    this.subscribeToProjectManagerControl()
    this.subscribeToFilteredEmployee ()

        
  }

  private fetchEmployees() {
    this.employees$ = this.projectManagerService.fetchEmployees();
  }

  private getSelectedProjectManager() {
    this.selectedManager = this.projectManagerService.getSelectedManager();
  }

  private subscribeToProjectManagerControl() {
    this.projectManagerControl.valueChanges.subscribe(
      value => {
        this.projectManagerService.setSelectedManager(value);
      }
    )
  }

  private subscribeToFilteredEmployee() {
    this.filteredEmployees$ = this.projectManagerControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      switchMap(value=>this.filterEmployee(value))
    )
  }

private filterEmployee(value: string): Observable<Employee[]> {
  const filterValue = value ? value.toLowerCase() : '';
  return this.employees$.pipe(
    map((employees: Employee[]) =>
      employees.filter((employee: Employee) =>
        employee.fullname.toLowerCase().includes(filterValue)
      )
    )
  );

 
}


remove(fruit: string): void {
  this.projectManagerService.clearSelectedManager();
}

clearSelectedManager() {
  this.projectManagerService.clearSelectedManager();
}
  
  




}
