import { TestBed } from '@angular/core/testing';

import { VmwareServerSizeService } from './vmware-server-size.service';

describe('VmwareServerSizeService', () => {
  let service: VmwareServerSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmwareServerSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
