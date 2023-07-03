
import { Component, OnInit,  ViewChild, ElementRef, Output, EventEmitter  } from '@angular/core';
import { AbstractControl, ValidatorFn, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';


import { Employee } from 'src/app/shared/interfaces/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-iid-project-steering-committee-members',
  templateUrl: './iid-project-steering-committee-members.component.html',
  styleUrls: ['./iid-project-steering-committee-members.component.css']
})
export class IidProjectSteeringCommitteeMembersComponent implements OnInit {

  @ViewChild('memberEmployeeInput') memberEmployeeInput: ElementRef<HTMLInputElement>;


  chipGridFormControl = new FormControl('', [Validators.required]);

  employeeFormControl = new FormControl('', Validators.required);

  
  
  allEmployees: Employee[] = [];
  filteredEmployees: Observable<Employee[]> 
  selectedEmployees: Employee[] = [];

  @Output() selectedEmployeesChange = new EventEmitter<Employee[]>();

  constructor(private employeeService: EmployeeService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {

    this.getEmployee()
    this.filterEmploye()
  }




  getEmployee():void{
    this.employeeService.getEmployees().subscribe((employees) => {
      this.allEmployees = employees;
    });
  }
  

  filterEmploye():void{
    this.filteredEmployees = this.employeeFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEmployee(value)),
    )
  }
  
  private _filterEmployee(value: string): Employee[] {
    const filterValue= value.toLowerCase()
    return this.allEmployees.filter(employee => employee.fullname.toLowerCase().includes(filterValue))
  }


  selected(event: MatAutocompleteSelectedEvent): void {
    console.log("Selected Event : ", event)
    const employee = event.option.value;
    console.log("employee", employee)
    if (this.selectedEmployees.some(e => e === employee)) {
      this.snackBar.open('Employee already in the Steering Committe', 'Close', { duration: 2000 });
      this.memberEmployeeInput.nativeElement.value = '';
      return;
    }
    this.chipGridFormControl.setValue(employee)
    this.selectedEmployees.push(employee);
    this.selectedEmployeesChange.emit(this.selectedEmployees);
    this.memberEmployeeInput.nativeElement.value = '';
    this.employeeFormControl.setValue('')

  }

  remove(memberEmployee: Employee): void {
    const index = this.selectedEmployees.indexOf(memberEmployee);

    console.log("Removed Employee: ",memberEmployee, this.selectedEmployees )

    if (index >= 0) {
      this.selectedEmployees.splice(index, 1);
    }
  }


  isEmployeeSelected(employee: Employee): boolean {
    return this.selectedEmployees.some(selectedEmployee => selectedEmployee.id === employee.id);
  }

  
  atLeastOneEmployeeValidator(): ValidatorFn {
    return (control: FormControl): { [key: string]: any } | null => {
      const selectedEmployees = control.value || [];
      return selectedEmployees.length > 0 ? null : { atLeastOneEmployee: true };
    };
  }

  isOptionDisabled(employee: Employee) {
    return this.selectedEmployees.includes(employee);
  }



}