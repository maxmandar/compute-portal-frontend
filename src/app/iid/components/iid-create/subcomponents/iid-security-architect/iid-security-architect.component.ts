import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Employee } from 'src/app/shared/interfaces/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-iid-security-architect',
  templateUrl: './iid-security-architect.component.html',
  styleUrls: ['./iid-security-architect.component.css']
})
export class IidSecurityArchitectComponent implements OnInit {

  @Output() securityArchitectSelected = new EventEmitter<Employee>();

  securityArchitectControl = new FormControl();
  filteredSecurityArchitects: Observable<Employee[]>;
  allSecurityArchitects: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getSecurityArchitects();
    this.filterSecurityArchitects();
  }

  getSecurityArchitects(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.allSecurityArchitects = employees;
    });
  }

  filterSecurityArchitects(): void {
    this.filteredSecurityArchitects = this.securityArchitectControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSecurityArchitect(value))
    );
  }

  private _filterSecurityArchitect(value: string): Employee[] {
    const filterValue = value.toLowerCase();
    return this.allSecurityArchitects.filter(employee => employee.fullname.toLowerCase().includes(filterValue));
  }

  displaySecurityArchitect(employee?: Employee): string | undefined {
    return employee ? employee.fullname : undefined;
  }

  onSecurityArchitectSelected(): void {
    this.securityArchitectSelected.emit(this.securityArchitectControl.value);
  }

}
