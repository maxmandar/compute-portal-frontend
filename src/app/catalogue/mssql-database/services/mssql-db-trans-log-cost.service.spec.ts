import { TestBed } from '@angular/core/testing';

import { MssqlDbTransLogCostService } from './mssql-db-trans-log-cost.service';

describe('MssqlDbTransLogCostService', () => {
  let service: MssqlDbTransLogCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MssqlDbTransLogCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
