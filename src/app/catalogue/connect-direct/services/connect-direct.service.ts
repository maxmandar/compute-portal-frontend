import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class ConnectDirectService {

  private connectDirectEnabledSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(private logger: NGXLogger) { }

  setConnectDirectEnabled(enabled: boolean): void {
    this.logger.log('Setting Connect Direct enabled to:', enabled);
    this.connectDirectEnabledSubject.next(enabled);
  }

  getConnectDirectEnabled(): Observable<boolean> {
    return this.connectDirectEnabledSubject.asObservable();
  }

  get currentConnectDirectEnabled(): boolean {
    return this.connectDirectEnabledSubject.value;
  }
}
