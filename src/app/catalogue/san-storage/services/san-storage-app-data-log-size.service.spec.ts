import { TestBed } from '@angular/core/testing';

import { SanStorageAppDataLogSizeService } from './san-storage-app-data-log-size.service';

describe('SanStorageAppDataLogSizeService', () => {
  let service: SanStorageAppDataLogSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanStorageAppDataLogSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
