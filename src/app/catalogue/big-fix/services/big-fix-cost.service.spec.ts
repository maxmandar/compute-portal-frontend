import { TestBed } from '@angular/core/testing';

import { BigFixCostService } from './big-fix-cost.service';

describe('BigFixCostService', () => {
  let service: BigFixCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigFixCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
