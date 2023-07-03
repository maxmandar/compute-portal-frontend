import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { SanStorageTypeService } from 'src/app/catalogue/san-storage/services/san-storage-type.service';
import { SanStorageApiService } from '../../services/san-storage-api.service';
import { SanStorageType, dummySanStorageType } from 'src/app/catalogue/san-storage/interfaces/san-storage-type';



@Component({
  selector: 'app-san-storage-type',
  templateUrl: './san-storage-type.component.html',
  styleUrls: ['./san-storage-type.component.css']
})
export class SanStorageTypeComponent implements OnInit {

  sanStorageTypes: SanStorageType[] = null

  public sanStorageTypeControl: FormControl;
  public roleSwapControl: FormControl;

  constructor(
    private sanStorageTypeService: SanStorageTypeService,
    private sanStorageApiService:SanStorageApiService,
    private logger: NGXLogger
  ) { }

  ngOnInit() {
    this.fetchSanStorageTypes();
    this.initializeSanStorageTypeControl();
    this.initializeSanStorageRoleSwapControl();
    this.subscribeSanStorageTypeChanges();
    this.subscribeSanStorageRoleSwapChanges();
  }

  // Fetches the available storage types
  private fetchSanStorageTypes(): void {
    // this.sanStorageTypes = dummySanStorageType

    this.sanStorageApiService.getSanStorageTypes().subscribe(
      (sanStorageTypes) => {
        this.sanStorageTypes = sanStorageTypes;
      },
      (error) => {
        this.logger.error('Error fetching SAN storage types:', error);
      }
    );
  }

  // Initializes the form control for storage type selection
  private initializeSanStorageTypeControl(): void {
    this.sanStorageTypeControl = new FormControl('', [Validators.required])
  }

  // Initializes the form control for role swap selection
  private initializeSanStorageRoleSwapControl(): void {
    this.roleSwapControl = new FormControl(false, [Validators.required])
  }

  // Subscribes to changes in the storage type control and updates the service
  private subscribeSanStorageRoleSwapChanges(): void {
    this.roleSwapControl.valueChanges.subscribe((value) => {
      if (this.roleSwapControl.valid) {
        this.sanStorageTypeService.setRoleSwap(value);
        this.logger.info(`Role swap set to ${value}`);
      }
    })
  }

  // Subscribes to changes in the role swap control and updates the service
  private subscribeSanStorageTypeChanges(): void {
    this.sanStorageTypeControl.valueChanges.subscribe((value) => {
      if (this.sanStorageTypeControl.valid) {
        this.sanStorageTypeService.setStorageType(value);
        this.logger.info(`San storage type set to ${value}`);
      }
    })
  }

}
