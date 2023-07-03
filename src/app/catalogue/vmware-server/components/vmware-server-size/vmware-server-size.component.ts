import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

import { VmwareServerSize } from '../../interfaces/vmware-server';
import { VmwareServerSizeService } from '../../services/vmware-server-size.service';
import { VmwareServerApiService } from '../../services/vmware-server-api.service';


@Component({
  selector: 'app-vmware-server-size',
  templateUrl: './vmware-server-size.component.html',
  styleUrls: ['./vmware-server-size.component.css']
})
export class VmwareServerSizeComponent implements OnInit, OnDestroy{

  public vmwareServerSizeControl: FormControl;
  private valueChangesSubscription: Subscription;
  public vmwareServerSizes: VmwareServerSize[] = null;


  constructor(
    private vmwareServerSizeService: VmwareServerSizeService,
    private vmwareServerApiService:VmwareServerApiService,
    private logger: NGXLogger
  ) {}


  ngOnInit() {
    this.fetchVmwareServerSizes();
    this.initializeFormControl();
    this.subscribeToFormControl();
  }

  ngOnDestroy(): void {
    this.valueChangesSubscription.unsubscribe();
  }



  private fetchVmwareServerSizes(): void {
    
    this.vmwareServerApiService.getVmwareServerSizes().subscribe((serverSizes) => {
      this.vmwareServerSizes = serverSizes;
    });
  }


  private initializeFormControl(): void {
    this.vmwareServerSizeControl = new FormControl(
      this.vmwareServerSizeService.getCurrentValue(),
      Validators.required
    );
  }

  private subscribeToFormControl(): void {
    this.valueChangesSubscription = this.vmwareServerSizeControl.valueChanges.subscribe((value) => {
      if (this.vmwareServerSizeControl.valid) {
        this.vmwareServerSizeService.setVmwareServerSize(value);
        this.logger.info('Updated VMware server size selection', value);
      }
    });
  }


  openConfluencePage(): void {
    const confluencePageUrl = 'https://your-confluence-page-url.com';
    window.open(confluencePageUrl, '_blank');
  }
}
