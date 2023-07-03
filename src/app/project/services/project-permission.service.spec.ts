import { TestBed } from '@angular/core/testing';

import { ProjectPermissionService } from './project-permission.service';

describe('ProjectPermissionService', () => {
  let service: ProjectPermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectPermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
