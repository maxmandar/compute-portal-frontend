import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from 'src/app/shared/interfaces/employee';
import { ProjectSteeringCommitteeApiService } from './project-steering-committee-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectSteeringCommitteeService {
  private selectedMembersSubject = new BehaviorSubject<Employee[]>([]);
  public selectedMembers$ = this.selectedMembersSubject.asObservable();

  constructor(
    private projectSteeringCommitteeApiService: ProjectSteeringCommitteeApiService
    ) { }

  addMember(member: Employee): void {
    const currentMembers = this.selectedMembersSubject.getValue();
    const updatedMembers = [...currentMembers, member];
    this.selectedMembersSubject.next(updatedMembers);
  }

  removeMember(member: Employee): void {
    const currentMembers = this.selectedMembersSubject.getValue();
    const updatedMembers = currentMembers.filter(m => m.id !== member.id);
    this.selectedMembersSubject.next(updatedMembers);
  }

  clearMembers(): void {
    this.selectedMembersSubject.next([]);
  }

  getEmployees(): Observable<Employee[]> {
    return this.projectSteeringCommitteeApiService.getEmployees();
  }
}
