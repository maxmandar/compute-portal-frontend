import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';
import { ProjectPermission } from '../interfaces/project';
import { ProjectUserRole } from '../interfaces/project';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectApiService {
  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  listProject(): Observable<Project[]> {
    const url = `${this.BASE_URL}/api/projects/list/`;
    return this.http.get<Project[]>(url);
  }

  createProject(project: Project): Observable<Project> {
    const url = `${this.BASE_URL}/api/projects/create/`;
    return this.http.post<Project>(url, project);
  }


  retrieveProject(id: number): Observable<Project> {
    const url = `${this.BASE_URL}/api/projects/retrieve/${id}/`;
    return this.http.get<Project>(url);
  }

  updateProject(id: number, project: Project): Observable<Project> {
    const url = `${this.BASE_URL}/api/projects/update/${id}/`;
    return this.http.put<Project>(url, project);
  }

  destroyProject(id: number): Observable<any> {
    const url = `${this.BASE_URL}/api/projects/destroy/${id}/`;
    return this.http.delete(url);
  }

  // Project permissions

  listProjectPermission(projectId: number): Observable<ProjectPermission[]> {
    const url = `${this.BASE_URL}/api/projects/${projectId}/permissions/list/`;
    return this.http.get<ProjectPermission[]>(url);
  }


  createProjectPermission(projectId: number, newPermission: any): Observable<ProjectPermission> {
    const url = `${this.BASE_URL}/api/projects/${projectId}/permissions/create/`;
    return this.http.post<ProjectPermission>(url, newPermission);
  }

  updateProjectPermission(projectId: number, permissionId: number, updatedPermission: ProjectPermission): Observable<ProjectPermission> {
    const url = `${this.BASE_URL}/api/${projectId}/permissions/${permissionId}`;
    return this.http.put<ProjectPermission>(url, updatedPermission);
  }

  destroyProjectPermission(projectId: number, permissionId: number): Observable<void> {
    const url = `${this.BASE_URL}/api/${projectId}/permissions/${permissionId}`;
    return this.http.delete<void>(url);
  }

  // Project Add users

  listProjectUserRole(): Observable<ProjectUserRole[]> {
    const url = `${this.BASE_URL}/api/projects/user_roles/list/`;
    return this.http.get<ProjectUserRole[]>(url);
  }



}
