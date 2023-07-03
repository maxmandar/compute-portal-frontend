import { TestBed } from '@angular/core/testing';

import { NasStorageSizeService } from './nas-storage-size.service';

describe('NasStorageSizeService', () => {
  let service: NasStorageSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasStorageSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
