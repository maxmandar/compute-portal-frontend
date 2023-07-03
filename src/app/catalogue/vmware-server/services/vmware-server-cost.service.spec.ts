import { TestBed } from '@angular/core/testing';

import { VmwareServerCostService } from './vmware-server-cost.service';

describe('VmwareServerCostService', () => {
  let service: VmwareServerCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmwareServerCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
