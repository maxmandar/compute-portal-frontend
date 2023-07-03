import { TestBed } from '@angular/core/testing';

import { SanStorageAppBinaryCostService } from './san-storage-app-binary-cost.service';

describe('SanStorageAppBinaryCostService', () => {
  let service: SanStorageAppBinaryCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanStorageAppBinaryCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
