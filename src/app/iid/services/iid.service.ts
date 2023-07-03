import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iid,IidSegment,IidSubSegment } from '../interfaces/iid';
// import { TokenService } from '..components';
import { environment } from '../../../environments/environment';
import { IidProject } from '../interfaces/iid';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IidService {


  private readonly apiBaseUrl = '/api';
  private BASE_URL = environment.BASE_URL;

  constructor(private readonly http: HttpClient) { }

  getIids(): Observable<Iid[]> {
    const url = `${this.BASE_URL}/api/iid-projects/`;
    return this.http.get<Iid[]>(url);
  }

  getIidById(id: number): Observable<Iid> {
    const url = `${this.BASE_URL}/api/iid-projects/${id}/`;
    return this.http.get<Iid>(url);
  }

 
  createIidProject(project: IidProject): Observable<IidProject> {
    const url = `${this.BASE_URL}/api/iid-projects/`; // replace with your API endpoint
    return this.http.post<IidProject>(url, project);
  }


  getSegments(): Observable<IidSegment[]> {
    const url = `${this.BASE_URL}/api/segments/`;
    return this.http.get<IidSegment[]>(url).pipe(
      catchError(error => {
        console.log('Error getting segments:', error);
        throw error;
      })
    );
  }

  getSubSegments(): Observable<IidSubSegment[]> {
    const url = `${this.BASE_URL}/api/subsegments/`;
    return this.http.get<IidSubSegment[]>(url).pipe(
      catchError(error => {
        console.log('Error getting Sub-Segments:', error);
        throw error;
      })
    );
  }
  

}
