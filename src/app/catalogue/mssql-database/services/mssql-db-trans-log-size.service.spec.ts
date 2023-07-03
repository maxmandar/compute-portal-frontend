import { TestBed } from '@angular/core/testing';

import { MssqlDbTransLogSizeService } from './mssql-db-trans-log-size.service';

describe('MssqlDbTransLogSizeService', () => {
  let service: MssqlDbTransLogSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MssqlDbTransLogSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
