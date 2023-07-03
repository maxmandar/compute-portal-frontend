import { TestBed } from '@angular/core/testing';

import { MssqlDbAppTempSizeService } from './mssql-db-app-temp-size.service';

describe('MssqlDbAppTempSizeService', () => {
  let service: MssqlDbAppTempSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MssqlDbAppTempSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
