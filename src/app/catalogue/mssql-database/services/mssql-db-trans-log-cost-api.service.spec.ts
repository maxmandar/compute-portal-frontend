import { TestBed } from '@angular/core/testing';

import { MssqlDbTransLogCostApiService } from './mssql-db-trans-log-cost-api.service';

describe('MssqlDbTransLogCostApiService', () => {
  let service: MssqlDbTransLogCostApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MssqlDbTransLogCostApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
