import { TestBed } from '@angular/core/testing';

import { MariaDbAppDbCostServiceService } from './maria-db-app-db-cost-service.service';

describe('MariaDbAppDbCostServiceService', () => {
  let service: MariaDbAppDbCostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MariaDbAppDbCostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
