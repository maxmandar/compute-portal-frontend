import { TestBed } from '@angular/core/testing';

import { VmwareServerOsCostService } from './vmware-server-os-cost.service';

describe('VmwareServerOsCostService', () => {
  let service: VmwareServerOsCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmwareServerOsCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
