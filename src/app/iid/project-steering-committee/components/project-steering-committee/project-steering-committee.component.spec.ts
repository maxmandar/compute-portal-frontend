import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSteeringCommitteeComponent } from './project-steering-committee.component';

describe('ProjectSteeringCommitteeComponent', () => {
  let component: ProjectSteeringCommitteeComponent;
  let fixture: ComponentFixture<ProjectSteeringCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSteeringCommitteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSteeringCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
