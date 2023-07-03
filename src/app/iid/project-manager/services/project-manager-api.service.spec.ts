import { TestBed } from '@angular/core/testing';

import { ProjectManagerApiService } from './project-manager-api.service';

describe('ProjectManagerApiService', () => {
  let service: ProjectManagerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectManagerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
