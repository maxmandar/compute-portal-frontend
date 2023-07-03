import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidProjectManagerComponent } from './iid-project-manager.component';

describe('IidProjectManagerComponent', () => {
  let component: IidProjectManagerComponent;
  let fixture: ComponentFixture<IidProjectManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidProjectManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidProjectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
