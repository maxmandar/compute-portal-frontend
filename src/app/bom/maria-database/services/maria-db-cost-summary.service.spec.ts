import { TestBed } from '@angular/core/testing';

import { MariaDbCostSummaryService } from './maria-db-cost-summary.service';

describe('MariaDbCostSummaryService', () => {
  let service: MariaDbCostSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MariaDbCostSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
