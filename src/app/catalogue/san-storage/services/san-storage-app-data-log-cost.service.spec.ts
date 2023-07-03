import { TestBed } from '@angular/core/testing';

import { SanStorageAppDataLogCostService } from './san-storage-app-data-log-cost.service';

describe('SanStorageAppDataLogCostService', () => {
  let service: SanStorageAppDataLogCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanStorageAppDataLogCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
