import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationCatalogue } from '../interfaces/application-catalogue';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationCatalogueService  {
  
  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getApplications(): Observable<ApplicationCatalogue[]> {
    const url = `${this.BASE_URL}/api/applications/`;
    return this.http.get<ApplicationCatalogue[]>(url);
  }




}
