import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

import { SanStorageAppDataLogSizeService } from '../../services/san-storage-app-data-log-size.service';

@Component({
  selector: 'app-san-storage-app-data-log-size',
  templateUrl: './san-storage-app-data-log-size.component.html',
  styleUrls: ['./san-storage-app-data-log-size.component.css']
})
export class SanStorageAppDataLogSizeComponent implements OnInit, OnDestroy {

  public sanStorageAppDataLogSizeControl: FormControl;
  private valueChangesSubscription: Subscription;

  constructor(
    private sanStorageAppDataLogSizeService: SanStorageAppDataLogSizeService,
    private logger: NGXLogger
  ) { }

  ngOnInit() {
    this.logger.debug('Initializing SAN Storage App Data Log Size component');
    this.initializeFormControl();
    this.subscribeToFormControl();
  }

  ngOnDestroy(): void {
    this.logger.debug('Destroying SAN Storage App Data Log Size component');
    this.valueChangesSubscription.unsubscribe();
  }



  private initializeFormControl(): void {
    this.logger.debug('Initializing form control');
    this.sanStorageAppDataLogSizeControl = new FormControl(0, [Validators.required, Validators.min(0)]);
  }

  private subscribeToFormControl(): void {
    this.logger.debug('Subscribing to form control changes');
    this.valueChangesSubscription = this.sanStorageAppDataLogSizeControl.valueChanges.subscribe(
      (value) => {
        if (this.sanStorageAppDataLogSizeControl.valid) {
          this.logger.log('Form control value changed. Setting data log size with value:', value);
          this.sanStorageAppDataLogSizeService.setDataLogSize(this.sanStorageAppDataLogSizeControl.value);
        }
      }
    )
  }


}
