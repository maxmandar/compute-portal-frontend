import { TestBed } from '@angular/core/testing';

import { ProjectSteeringCommitteeApiService } from './project-steering-committee-api.service';

describe('ProjectSteeringCommitteeApiService', () => {
  let service: ProjectSteeringCommitteeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectSteeringCommitteeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
