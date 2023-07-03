import { TestBed } from '@angular/core/testing';

import { MssqlDbAppTempCostService } from './mssql-db-app-temp-cost.service';

describe('MssqlDbAppTempCostService', () => {
  let service: MssqlDbAppTempCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MssqlDbAppTempCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
