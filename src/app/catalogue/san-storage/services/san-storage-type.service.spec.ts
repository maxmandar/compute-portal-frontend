import { TestBed } from '@angular/core/testing';

import { SanStorageService } from './san-storage.service';

describe('SanStorageService', () => {
  let service: SanStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
