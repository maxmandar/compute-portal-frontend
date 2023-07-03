import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

import { VmwareServerExtraRamService } from '../../services/vmware-server-extra-ram.service';

@Component({
  selector: 'app-vmware-server-extra-ram',
  templateUrl: './vmware-server-extra-ram.component.html',
  styleUrls: ['./vmware-server-extra-ram.component.css']
})
export class VmwareServerExtraRamComponent implements OnInit, OnDestroy {

  public extraRamControl: FormControl;
  private valueChangesSubscription: Subscription;

  constructor(
    private vmwareServerExtraRamService: VmwareServerExtraRamService,
    private logger: NGXLogger
  ) { }

  ngOnInit() {
    this.logger.debug('Initializing VmwareServerExtraRam component');
    this.initializeFormControl();
    this.subscribeToFormControl();
  }

  ngOnDestroy(): void {
    this.logger.debug('Destroying VmwareServerExtraRam component');
    this.valueChangesSubscription.unsubscribe();
  }

  private initializeFormControl(): void {
    this.logger.debug('Initializing form control');
    this.extraRamControl = new FormControl(false, [Validators.required]);
  }

  private subscribeToFormControl(): void {
    this.logger.debug('Subscribing to form control changes');
    this.valueChangesSubscription = this.extraRamControl.valueChanges.subscribe(
      (value) => {
        this.logger.info('Form control value changed. Setting Extra Ram status to:', value);
        this.vmwareServerExtraRamService.setVmwareServerExtraRam(value);
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
