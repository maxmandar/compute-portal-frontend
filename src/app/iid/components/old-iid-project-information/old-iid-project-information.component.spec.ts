import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldIidProjectInformationComponent } from './old-iid-project-information.component';

describe('IidProjectInformationComponent', () => {
  let component: OldIidProjectInformationComponent;
  let fixture: ComponentFixture<OldIidProjectInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldIidProjectInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldIidProjectInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
