import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NGXLogger } from 'ngx-logger'; // import the logger

import { VmwareServerOs } from '../../interfaces/vmware-server';
import { VmwareServerOsService } from '../../services/vmware-server-os.service';
import { VmwareServerApiService } from '../../services/vmware-server-api.service';


@Component({
  selector: 'app-vmware-server-os',
  templateUrl: './vmware-server-os.component.html',
  styleUrls: ['./vmware-server-os.component.css']
})
export class VmwareServerOsComponent implements OnInit, OnDestroy{

  public vmwareServerOsControl: FormControl;
  private valueChangesSubscription: Subscription;
  public vmwareServerOs: VmwareServerOs[] = null;


  constructor(
    private logger: NGXLogger, // inject the logger
    private vmwareServerOsService: VmwareServerOsService,
    private vmwareServerApiService:VmwareServerApiService) {}


  ngOnInit() {
    this.fetchVmwareServerOs();
    this.initializeFormControl();
    this.subscribeToFormControl();
  }

  ngOnDestroy(): void {
    this.valueChangesSubscription.unsubscribe();
  }



  private fetchVmwareServerOs(): void {
    
    this.vmwareServerApiService.getVmwareServerOs().subscribe(
      (serverSizes) => {
        this.vmwareServerOs = serverSizes;
      },
      (error) => {
        this.logger.error('Failed to fetch VMware server OS', error); // log the error
      }
    );
  }


  private initializeFormControl(): void {
    this.vmwareServerOsControl = new FormControl(
      '',
      Validators.required
    );
  }

  private subscribeToFormControl(): void {
    this.valueChangesSubscription = this.vmwareServerOsControl.valueChanges.subscribe((value) => {
      if (this.vmwareServerOsControl.valid) {
        this.vmwareServerOsService.setVmwareServerOs(value);
        this.logger.info('Selected VMware server OS', value); // log the selected value
      } else {
        this.logger.warn('Invalid VMware server OS selected', value); // log the invalid value
      }
    });
  }


  openConfluencePage(): void {
    const confluencePageUrl = 'https://your-confluence-page-url.com';
    window.open(confluencePageUrl, '_blank');
  }
  



}