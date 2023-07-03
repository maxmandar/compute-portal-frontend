import { TestBed } from '@angular/core/testing';

import { VmwareServerApiService } from './vmware-server-api.service';

describe('VmwareServerApiService', () => {
  let service: VmwareServerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmwareServerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
