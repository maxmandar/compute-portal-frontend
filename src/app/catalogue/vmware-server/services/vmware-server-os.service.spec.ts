import { TestBed } from '@angular/core/testing';

import { VmwareServerOsService } from './vmware-server-os.service';

describe('VmwareServerOsService', () => {
  let service: VmwareServerOsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmwareServerOsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
