import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectApiService } from './project-api.service';
import { ProjectPermission } from '../interfaces/project';
import { ProjectUserRole } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectPermissionService {

  constructor(private projectApiService: ProjectApiService) {}

  listProjectPermissions(projectId: number): Observable<ProjectPermission[]> {
    return this.projectApiService.listProjectPermission(projectId);
  }

  createProjectPermission(projectId: number, newUserRole: any): Observable<ProjectPermission> {
    return this.projectApiService.createProjectPermission(projectId, newUserRole);
  }

  updateProjectPermission(projectId: number, permissionId: number, updatedPermission: ProjectPermission): Observable<ProjectPermission> {
    return this.projectApiService.updateProjectPermission(projectId, permissionId, updatedPermission);
  }

  destroyProjectPermission(projectId: number, permissionId: number): Observable<void> {
    return this.projectApiService.destroyProjectPermission(projectId, permissionId);
  }

  listProjectUserRole(): Observable<ProjectUserRole[]> {
    return this.projectApiService.listProjectUserRole();
  }

}
