import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

import { MssqlDbAppTempSizeService } from '../../services/mssql-db-app-temp-size.service';

@Component({
  selector: 'app-mssql-db-app-temp-size',
  templateUrl: './mssql-db-app-temp-size.component.html',
  styleUrls: ['./mssql-db-app-temp-size.component.css']
})
export class MssqlDbAppTempSizeComponent implements OnInit, AfterViewInit, OnDestroy{

  public mssqlDbAppTempSizeControl: FormControl
  private valueChangesSubscription: Subscription;

  constructor(
    private mssqlDbAppTempSizeService: MssqlDbAppTempSizeService,
    private logger: NGXLogger
  ) { }

  ngOnInit() {
    this.logger.log('Initializing MSSQL DB App Temp Size component');
    this.initializeFormControl();
    this.subscribeToFormControl();
  }

  ngOnDestroy(): void {
    this.logger.log('Destroying MSSQL DB App Temp Size component');
    this.valueChangesSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.logger.log('MSSQL DB App Temp Size component view initialized');
    this.initializeServices();
  }

  private initializeFormControl(): void {
    this.logger.log('Initializing form control');
    this.mssqlDbAppTempSizeControl = new FormControl(0, [Validators.required, Validators.min(0)])
  }

  private subscribeToFormControl(): void {
    this.logger.log('Subscribing to form control changes');
    this.valueChangesSubscription = this.mssqlDbAppTempSizeControl.valueChanges.subscribe(
      (value) => {
        if (this.mssqlDbAppTempSizeControl.valid) {
          this.logger.log('Form control value changed. Setting app temp size with value:', value);
          this.mssqlDbAppTempSizeService.setAppTempSize(this.mssqlDbAppTempSizeControl.value);
        }
      }
    )
  }

  private initializeServices(): void {
    this.logger.log('Initializing MSSQL DB App Temp Size service with initial value:', this.mssqlDbAppTempSizeControl.value);
    this.mssqlDbAppTempSizeService.setAppTempSize(this.mssqlDbAppTempSizeControl.value)
  }
}
