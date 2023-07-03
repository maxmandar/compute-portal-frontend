import { TestBed } from '@angular/core/testing';

import { NasStorageApiService } from './nas-storage-api.service';

describe('NasStorageApiService', () => {
  let service: NasStorageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasStorageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
