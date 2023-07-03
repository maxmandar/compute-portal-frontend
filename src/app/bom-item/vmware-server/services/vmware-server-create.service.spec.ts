import { TestBed } from '@angular/core/testing';

import { VmwareServerCreateService } from './vmware-server-create.service';

describe('VmwareServerCreateService', () => {
  let service: VmwareServerCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmwareServerCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
