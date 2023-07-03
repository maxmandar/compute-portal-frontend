import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

import { ProjectApiService } from './project-api.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly apiBaseUrl = '/api';


  constructor(private projectApiService: ProjectApiService) { }

  listProject(): Observable<Project[]> {
    return this.projectApiService.listProject();
  }

  
  createProject(project: Project): Observable<Project> {
    return this.projectApiService.createProject(project);
  }
  



  getProjectDetails(id: number): Observable<Project> {
    return this.projectApiService.retrieveProject(id);
  }


  

}
