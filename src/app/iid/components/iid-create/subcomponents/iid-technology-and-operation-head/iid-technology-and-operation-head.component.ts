import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Employee } from 'src/app/shared/interfaces/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-iid-technology-and-operation-head',
  templateUrl: './iid-technology-and-operation-head.component.html',
  styleUrls: ['./iid-technology-and-operation-head.component.css']
})
export class IidTechnologyAndOperationHeadComponent implements OnInit {

  @Output() headSelected = new EventEmitter<Employee>();

  headControl = new FormControl();
  filteredHeads: Observable<Employee[]>;
  allHeads: Employee[] = [];


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee()
    this.filterEmploye()
  }

  getEmployee():void{
    this.employeeService.getEmployees().subscribe((employees) => {
      this.allHeads = employees;
    });
  }
  

  filterEmploye():void{
    this.filteredHeads = this.headControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEmployee(value)),
    )
  }
  
  private _filterEmployee(value: string): Employee[] {
    const filterValue= value.toLowerCase()
    return this.allHeads.filter(employee => employee.fullname.toLowerCase().includes(filterValue))
  }


  displayHead(employee?: Employee): string | undefined {
    return employee ? employee.fullname : undefined;
  }

  private _filter(value: string): Employee[] {
    const filterValue = value.toLowerCase();
    return this.allHeads.filter(employee => employee.fullname.toLowerCase().indexOf(filterValue) === 0);
  }

  onHeadSelected(): void {
    console.log("this.headControl.value",this.headControl.value)
    this.headSelected.emit(this.headControl.value);
  }


}
