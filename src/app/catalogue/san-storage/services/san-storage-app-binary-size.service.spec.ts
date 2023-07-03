import { TestBed } from '@angular/core/testing';

import { SanStorageAppBinarySizeService } from './san-storage-app-binary-size.service';

describe('SanStorageAppBinarySizeService', () => {
  let service: SanStorageAppBinarySizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanStorageAppBinarySizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
