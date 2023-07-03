import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidProjectInformationComponent } from './iid-project-information.component';

describe('IidProjectInformationComponent', () => {
  let component: IidProjectInformationComponent;
  let fixture: ComponentFixture<IidProjectInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidProjectInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidProjectInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
