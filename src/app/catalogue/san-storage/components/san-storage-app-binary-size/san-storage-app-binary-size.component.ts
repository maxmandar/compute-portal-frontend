import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

import { SanStorageAppBinarySizeService } from '../../services/san-storage-app-binary-size.service';

@Component({
  selector: 'app-san-storage-app-binary-size',
  templateUrl: './san-storage-app-binary-size.component.html',
  styleUrls: ['./san-storage-app-binary-size.component.css']
})
export class SanStorageAppBinarySizeComponent implements OnInit, OnDestroy {

  public sanStorageAppBinarySizeControl: FormControl
  private valueChangesSubscription: Subscription;

  constructor(
    private sanStorageAppBinarySizeService: SanStorageAppBinarySizeService,
    private logger: NGXLogger
  ) { }

  ngOnInit() {
    this.logger.debug('Initializing SAN Storage App Binary Size component');
    this.initializeFormControl();
    this.subscribeToFormControl();
  }

  ngOnDestroy(): void {
    this.logger.debug('Destroying SAN Storage App Binary Size component');
    this.valueChangesSubscription.unsubscribe();
  }

  private initializeFormControl(): void {
    this.logger.debug('Initializing form control');
    this.sanStorageAppBinarySizeControl = new FormControl(0, [Validators.required, Validators.min(0)])
  }

  private subscribeToFormControl(): void {
    this.logger.debug('Subscribing to form control changes');
    this.valueChangesSubscription = this.sanStorageAppBinarySizeControl.valueChanges.subscribe(
      (value) => {
        if (this.sanStorageAppBinarySizeControl.valid) {
          this.logger.info('Form control value changed. Setting app binary size with value:', value);
          this.sanStorageAppBinarySizeService.setAppBinarySize(this.sanStorageAppBinarySizeControl.value);
        }
      }
    )
  }
}
