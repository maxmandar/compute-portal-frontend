import { Component, Output, EventEmitter } from '@angular/core';

import { Employee } from 'src/app/shared/interfaces/employee';

import { IidSegment } from 'src/app/iid/interfaces/iid';

@Component({
  selector: 'app-iid-project-information',
  templateUrl: './iid-project-information.component.html',
  styleUrls: ['./iid-project-information.component.css']
})
export class IidProjectInformationComponent {

  @Output() projectInformationValid = new EventEmitter<boolean>();


  isProjectInformationValid = false;
  selectedSegmentId: IidSegment;
  selectedSubSegmentId: IidSegment;
  selectedBudget: number;
  selectedEmployees: Employee[]
  selectedHead: Employee[]
  


  onSegmentSelected(segmentId: IidSegment) {
    console.log("Segment:", segmentId)
    this.selectedSegmentId = segmentId;
    this.validateProjectInformation();
    // Do something with the selected segment ID...
  }

  onSubSegmentSelected(subSegmentId: IidSegment) {
    // Do something with the selected segment ID...
    console.log("SubSegment: ",subSegmentId )
    this.selectedSubSegmentId = subSegmentId;
    this.validateProjectInformation();
  }

  onBudgetSelected(budget: number){
    console.log("SubSegment: ",budget )
    this.selectedBudget = budget;
    this.validateProjectInformation();

  }

  onSelectedEmployeesChange(selectedEmployees: Employee[]){

    this.selectedEmployees = selectedEmployees;
    this.validateProjectInformation();

  }

  onHeadSelected(selectedHead:Employee[]){
    this.selectedHead = selectedHead
    this.validateProjectInformation();
  }

  
  
  validateProjectInformation() {
    console.log("Inside Validation", this.isProjectInformationValid)
    if (this.selectedSegmentId && this.selectedSubSegmentId && this.selectedEmployees && this.selectedBudget &&  this.selectedHead) 
    {
      this.isProjectInformationValid = true;
      this.projectInformationValid.emit(true);
    } 
    else 
    {
      this.isProjectInformationValid = false;
  
    }
  }

}
