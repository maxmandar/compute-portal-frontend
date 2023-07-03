import { TestBed } from '@angular/core/testing';

import { VmwareServerExtraRamCostService } from './vmware-server-extra-ram-cost.service';

describe('VmwareServerExtraRamCostService', () => {
  let service: VmwareServerExtraRamCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmwareServerExtraRamCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
