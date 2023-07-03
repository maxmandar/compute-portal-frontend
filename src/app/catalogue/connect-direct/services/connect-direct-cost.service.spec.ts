import { TestBed } from '@angular/core/testing';

import { ConnectDirectCostService } from './connect-direct-cost.service';

describe('ConnectDirectCostService', () => {
  let service: ConnectDirectCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectDirectCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
