import { TestBed } from '@angular/core/testing';

import { VmwareServerSizeCostService } from './vmware-server-size-cost.service';

describe('VmwareServerSizeCostService', () => {
  let service: VmwareServerSizeCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmwareServerSizeCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
