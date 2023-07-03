import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bom } from '../interfaces/bom';
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BomService {

  private readonly apiBaseUrl = '/api';
  private BASE_URL = environment.BASE_URL;


  constructor(private http: HttpClient) { }

  getBomList(): Observable<Bom[]> {
    const url = `${this.BASE_URL}/api/billofmaterial/`;
    return this.http.get<Bom[]>(url);
  }


  getBomDetail(id: number): Observable<Bom> {
    const url = `${this.BASE_URL}/api/billofmaterial/${id}/`;
    return this.http.get<Bom>(url);
  }


}
