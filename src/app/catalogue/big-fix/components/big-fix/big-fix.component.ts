import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

import { BigFixService } from '../../services/big-fix.service';

@Component({
  selector: 'app-bigfix',
  templateUrl: './big-fix.component.html',
  styleUrls: ['./big-fix.component.css']
})
export class BigFixComponent implements OnInit, OnDestroy {

  public bigFixControl: FormControl;
  private valueChangesSubscription: Subscription;

  constructor(
    private bigFixService: BigFixService,
    private logger: NGXLogger
  ) { }

  ngOnInit() {
    this.logger.debug('Initializing BigFix component');
    this.initializeFormControl();
    this.subscribeToFormControl();
  }

  ngOnDestroy(): void {
    this.logger.debug('Destroying BigFix component');
    this.valueChangesSubscription.unsubscribe();
  }

  private initializeFormControl(): void {
    this.logger.debug('Initializing form control');
    this.bigFixControl = new FormControl(false, [Validators.required]);
  }

  private subscribeToFormControl(): void {
    this.logger.debug('Subscribing to form control changes');
    this.valueChangesSubscription = this.bigFixControl.valueChanges.subscribe(
      (value) => {
        this.logger.info('Form control value changed. Setting BigFix status to:', value);
        this.bigFixService.setBigFixRequested(value);
      },
      (error) => {
        this.logger.error('Error occurred while subscribing to form control changes:', error);
      },
      () => {
        this.logger.debug('Form control subscription completed');
      }
    )
  }
}
