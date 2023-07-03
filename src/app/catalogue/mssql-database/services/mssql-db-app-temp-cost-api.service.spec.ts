import { TestBed } from '@angular/core/testing';

import { MssqlDbAppTempCostApiService } from './mssql-db-app-temp-cost-api.service';

describe('MssqlDbAppTempCostApiService', () => {
  let service: MssqlDbAppTempCostApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MssqlDbAppTempCostApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
