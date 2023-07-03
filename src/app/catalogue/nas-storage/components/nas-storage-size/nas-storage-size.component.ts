import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { NasStorageSize } from '../../interfaces/nas-storage';
import { NasStorageSizeService } from '../../services/nas-storage-size.service';

import { NGXLogger } from 'ngx-logger';


@Component({
  selector: 'app-nas-storage-size',
  templateUrl: './nas-storage-size.component.html',
  styleUrls: ['./nas-storage-size.component.css']
})
export class NasStorageSizeComponent implements OnInit, OnDestroy {

  public nasStorageSizeControl: FormControl;
  private valueChangesSubscription: Subscription;

  constructor(
    private nasStorageSizeService: NasStorageSizeService,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.initializeFormControl();
    this.subscribeToFormControl();
  }

  ngOnDestroy(): void {
    this.valueChangesSubscription.unsubscribe();
  }

  private initializeFormControl(): void {
    this.nasStorageSizeControl = new FormControl('', [Validators.required,Validators.min(50)]);
  }

  private subscribeToFormControl(): void {
    this.valueChangesSubscription = this.nasStorageSizeControl.valueChanges.subscribe((value) => {
      if (this.nasStorageSizeControl.valid) {
        this.nasStorageSizeService.setNasStorageSize(value);
        this.logger.debug('Updating NAS storage size:', value);
        this.logger.info('NAS storage size updated successfully:', value);
      } else {
        this.logger.warn('Invalid NAS storage size input.');
      }
    });
  }

  openConfluencePage(): void {
    const confluencePageUrl = 'https://your-confluence-page-url.com';
    window.open(confluencePageUrl, '_blank');
    this.logger.info('Opening NAS storage size help page');
  }
}