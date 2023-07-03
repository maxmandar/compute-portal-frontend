import { TestBed } from '@angular/core/testing';

import { MariaDbAppDbSizeServiceService } from './maria-db-app-db-size-service.service';

describe('MariaDbAppDbSizeServiceService', () => {
  let service: MariaDbAppDbSizeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MariaDbAppDbSizeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
