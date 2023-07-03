import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Employee } from 'src/app/shared/interfaces/employee';
import { ProjectSteeringCommitteeService } from '../../services/project-steering-committee.service';

@Component({
  selector: 'app-project-steering-committee',
  templateUrl: './project-steering-committee.component.html',
  styleUrls: ['./project-steering-committee.component.css']
})
export class ProjectSteeringCommitteeComponent implements OnInit {
  employees: Employee[] = [];
  memberControl = new FormControl();
  filteredEmployees: Employee[] = [];

  constructor(public projectSteeringCommitteeService: ProjectSteeringCommitteeService) { }

  ngOnInit(): void {
    this.projectSteeringCommitteeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });

    this.memberControl.valueChanges.subscribe(value => {
      this.filteredEmployees = this.filterEmployees(value);
    });
  }

  filterEmployees(value: string): Employee[] {
    if (typeof value !== 'string') {
      return [];
    }
    const filterValue = value.toLowerCase();
    return this.employees.filter(employee =>
      employee.fullname.toLowerCase().includes(filterValue) ||
      employee.username.toLowerCase().includes(filterValue)
    );
  }

  onMemberSelected(member: Employee): void {
    this.projectSteeringCommitteeService.selectedMembers$.subscribe(selectedMembers => {
      if (selectedMembers.some(m => m.id === member.id)) {
        console.log('Member already exists in selected committee members.');

        // You can display an error message to the user here
        return;
      }

      this.projectSteeringCommitteeService.addMember(member);
      this.memberControl.setValue('');
      this.filteredEmployees = [];
    });
  }

  onMemberRemoved(member: Employee): void {
    this.projectSteeringCommitteeService.removeMember(member);
  }
}
