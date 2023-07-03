import { TestBed } from '@angular/core/testing';

import { SanStorageApiService } from './san-storage-api.service';

describe('SanStorageApiService', () => {
  let service: SanStorageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanStorageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
