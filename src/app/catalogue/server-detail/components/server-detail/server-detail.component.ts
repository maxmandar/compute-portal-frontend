import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ServerDetailService } from '../../services/server-detail.service';

import { NGXLogger } from 'ngx-logger';


@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.css']
})
export class ServerDetailComponent implements OnInit {
  serverDetailControl: FormControl;

  constructor(
    private serverDetailService: ServerDetailService,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.initializeFormControl();
  }

  // Updates the server detail in the service if the form control is valid
  updateServerDetail(): void {
    if (this.serverDetailControl.valid) {
      // Debug log: Updating server detail
      this.logger.debug('Updating server detail:', this.serverDetailControl.value);

      this.serverDetailService.setServerDetail(this.serverDetailControl.value);

      // Info log: Server detail updated successfully
      this.logger.info('Server detail updated:', this.serverDetailControl.value);
    } else {
      // Warning log: Server detail update failed due to invalid input
      this.logger.warn('Server detail update failed. Invalid input.');
    }
  }

  // Initializes the form control with validators
  private initializeFormControl(): void {
    this.serverDetailControl = new FormControl('', Validators.required);

    // Debug log: Initialized form control
    this.logger.debug('Initialized server detail form control');
  }


  openConfluencePage(): void {
    const confluencePageUrl = 'https://your-confluence-page-url.com';
    window.open(confluencePageUrl, '_blank');
  }
  
}
