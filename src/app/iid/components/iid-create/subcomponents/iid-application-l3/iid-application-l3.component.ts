import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
// import { ApplicationService } from 'src/app/iid/services/application.service';
// import { Application } from 'src/app/iid/interfaces/iid';

import { Employee } from 'src/app/shared/interfaces/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-iid-application-l3',
  templateUrl: './iid-application-l3.component.html',
  styleUrls: ['./iid-application-l3.component.css']
})
export class IidApplicationL3Component implements OnInit {

  @Output() applicationSelected = new EventEmitter<Employee>();

  applicationControl = new FormControl();
  filteredApplications: Observable<Employee[]>;
  allApplications: Employee[] = [];


  constructor(private applicationService: EmployeeService) { }

  ngOnInit() {
    this.getApplications();
    this.filterApplications();
  }

  getApplications():void{
    this.applicationService.getEmployees().subscribe((applications) => {
      this.allApplications = applications;
    });
  }
  

  filterApplications():void{
    this.filteredApplications = this.applicationControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterApplication(value)),
    )
  }
  
  private _filterApplication(value: string): Employee[] {
    const filterValue= value.toLowerCase()
    return this.allApplications.filter(application => application.fullname.toLowerCase().includes(filterValue))
  }


  displayApplication(application?: Employee): string | undefined {
    return application ? application.fullname : undefined;
  }

  onApplicationSelected(): void {
    this.applicationSelected.emit(this.applicationControl.value);
  }


}
