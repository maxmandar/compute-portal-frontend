import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

import { MssqlDbTransLogSizeService } from '../../services/mssql-db-trans-log-size.service';

@Component({
  selector: 'app-mssql-db-trans-log-size',
  templateUrl: './mssql-db-trans-log-size.component.html',
  styleUrls: ['./mssql-db-trans-log-size.component.css']
})
export class MssqlDbTransLogSizeComponent implements OnInit, OnDestroy {

  public mssqlDbTransLogSizeControl: FormControl;
  private valueChangesSubscription: Subscription;

  constructor(
    private mssqlDbTransLogSizeService: MssqlDbTransLogSizeService,
    private logger: NGXLogger
  ) { }

  ngOnInit() {
    this.logger.log('Initializing MSSQL DB Transaction Log Size component');
    this.initializeFormControl();
    this.subscribeToFormControl();
  }

  ngOnDestroy(): void {
    this.logger.log('Destroying MSSQL DB Transaction Log Size component');
    this.valueChangesSubscription.unsubscribe();
  }

  private initializeFormControl(): void {
    this.logger.log('Initializing form control');
    this.mssqlDbTransLogSizeControl = new FormControl(0, [Validators.required, Validators.min(0)]);
  }

  private subscribeToFormControl(): void {
    this.logger.log('Subscribing to form control changes');
    this.valueChangesSubscription = this.mssqlDbTransLogSizeControl.valueChanges.subscribe(
      (value) => {
        if (this.mssqlDbTransLogSizeControl.valid) {
          this.logger.log('Form control value changed. Setting MSSQL DB Transaction Log Size with value:', value);
          this.mssqlDbTransLogSizeService.setTransLogSize(value);
        }
      }
    )
  }
}
