import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

import { ConnectDirectService } from '../../services/connect-direct.service';

@Component({
  selector: 'app-connect-direct',
  templateUrl: './connect-direct.component.html',
  styleUrls: ['./connect-direct.component.css']
})
export class ConnectDirectComponent implements OnInit, OnDestroy {

  public connectDirectControl: FormControl;
  private valueChangesSubscription: Subscription;

  constructor(
    private connectDirectService: ConnectDirectService,
    private logger: NGXLogger
  ) { }

  ngOnInit() {
    this.logger.debug('Initializing Connect Direct component');
    this.initializeFormControl();
    this.subscribeToFormControl();
  }

  ngOnDestroy(): void {
    this.logger.debug('Destroying Connect Direct component');
    this.valueChangesSubscription.unsubscribe();
  }

  private initializeFormControl(): void {
    this.logger.debug('Initializing form control');
    this.connectDirectControl = new FormControl(false);
  }

  private subscribeToFormControl(): void {
    this.logger.debug('Subscribing to form control changes');
    this.valueChangesSubscription = this.connectDirectControl.valueChanges.subscribe(
      (value) => {
        this.logger.info('Connect Direct enabled value changed:', value);
        this.connectDirectService.setConnectDirectEnabled(value);
      }
    )
  }
}
