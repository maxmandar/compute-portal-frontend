import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Employee } from 'src/app/shared/interfaces/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-iid-lead-technical-delievery-manager',
  templateUrl: './iid-lead-technical-delievery-manager.component.html',
  styleUrls: ['./iid-lead-technical-delievery-manager.component.css']
})
export class IidLeadTechnicalDelieveryManagerComponent implements OnInit{

  @Output() leadTechnicalDeliveryManagerSelected = new EventEmitter<Employee>();

  leadTechnicalDeliveryManagerControl = new FormControl();
  filteredLeadTechnicalDeliveryManagers: Observable<Employee[]>;
  allLeadTechnicalDeliveryManagers: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
    this.filterEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.allLeadTechnicalDeliveryManagers = employees;
    });
  }

  filterEmployees(): void {
    this.filteredLeadTechnicalDeliveryManagers = this.leadTechnicalDeliveryManagerControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEmployees(value))
    );
  }

  private _filterEmployees(value: string): Employee[] {
    const filterValue = value.toLowerCase();
    return this.allLeadTechnicalDeliveryManagers.filter(employee => employee.fullname.toLowerCase().includes(filterValue));
  }

  displayLeadTechnicalDeliveryManager(employee?: Employee): string | undefined {
    return employee ? employee.fullname : undefined;
  }

  onLeadTechnicalDeliveryManagerSelected(): void {
    this.leadTechnicalDeliveryManagerSelected.emit(this.leadTechnicalDeliveryManagerControl.value);
  }

}
