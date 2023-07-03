import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BomResourceService {

  private bomResourcesSubject = new BehaviorSubject([]);

  private url = 'http://localhost:8000/api/virtual-server/list/';

  constructor(private http: HttpClient) { }

  public fetchBomResources(projectId: number, bomId: number): void {
    const url = `http://localhost:8000/api/virtual-server/list/?project_id=${projectId}&bom_id=${bomId}`;
    this.http.get<any[]>(url).subscribe(
      data => {
        this.bomResourcesSubject.next(data);
      },
      error => {
        console.log('Error fetching BOM resources', error);
      }
    );
  }


  public getBomResources(): Observable<any[]> {
    return this.bomResourcesSubject.asObservable();
  }

  
  public get bomResources(): any[] {
    return this.bomResourcesSubject.value;
  }


}
