import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Employee } from 'src/app/shared/interfaces/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-iid-project-manager',
  templateUrl: './iid-project-manager.component.html',
  styleUrls: ['./iid-project-manager.component.css']
})
export class IidProjectManagerComponent implements OnInit {

  @Output() managerSelected = new EventEmitter<Employee>();

  managerControl = new FormControl();
  filteredManagers: Observable<Employee[]>;
  allManagers: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
    this.filterEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.allManagers = employees;
    });
  }

  filterEmployees(): void {
    this.filteredManagers = this.managerControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEmployee(value)),
    );
  }

  private _filterEmployee(value: string): Employee[] {
    const filterValue= value.toLowerCase();
    return this.allManagers.filter(employee => employee.fullname.toLowerCase().includes(filterValue));
  }

  displayManager(employee?: Employee): string | undefined {
    return employee ? employee.fullname : undefined;
  }

  onManagerSelected(): void {
    this.managerSelected.emit(this.managerControl.value);
  }

}
