import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pif } from '../interfaces/pif'; 
import { environment } from '../../../environments/environment';
import { TokenService } from 'src/app/auth/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class PifService {

  private BASE_URL = environment.BASE_URL;


  constructor(private http: HttpClient, private tokenService: TokenService) { }

  // Get list of projects from the server
  getProjects(): Observable<Pif[]> {
    const token = this.tokenService.getToken();
    return this.http.get<Pif[]>(`${this.BASE_URL}/api/projects/`, {
      headers: {
        Authorization: `Bearer ${token}` // Add Authorization header with token
      }
    });
  }

  // Get list of pifs from the server
  getPifs(): Observable<Pif[]> {
    return this.http.get<Pif[]>(`${this.BASE_URL}/api/projects/`);
  }

}
