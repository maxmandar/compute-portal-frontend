import { TestBed } from '@angular/core/testing';

import { NasStorageCostService } from './nas-storage-cost.service';

describe('NasStorageCostService', () => {
  let service: NasStorageCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasStorageCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
