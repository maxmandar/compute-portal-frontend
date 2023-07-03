import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Employee } from 'src/app/shared/interfaces/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-iid-domain-architect',
  templateUrl: './iid-domain-architect.component.html',
  styleUrls: ['./iid-domain-architect.component.css']
})
export class IidDomainArchitectComponent implements OnInit {

  @Output() architectSelected = new EventEmitter<Employee>();

  architectControl = new FormControl();
  filteredArchitects: Observable<Employee[]>;
  allArchitects: Employee[] = [];


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee()
    this.filterEmployee()
  }

  getEmployee():void{
    this.employeeService.getEmployees().subscribe((employees) => {
      this.allArchitects = employees;
    });
  }
  

  filterEmployee():void{
    this.filteredArchitects = this.architectControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEmployee(value)),
    )
  }
  
  private _filterEmployee(value: string): Employee[] {
    const filterValue= value.toLowerCase()
    return this.allArchitects.filter(employee => employee.fullname.toLowerCase().includes(filterValue))
  }


  displayArchitect(employee?: Employee): string | undefined {
    return employee ? employee.fullname : undefined;
  }

  private _filter(value: string): Employee[] {
    const filterValue = value.toLowerCase();
    return this.allArchitects.filter(employee => employee.fullname.toLowerCase().indexOf(filterValue) === 0);
  }

  onArchitectSelected(): void {
    this.architectSelected.emit(this.architectControl.value);
  }
}