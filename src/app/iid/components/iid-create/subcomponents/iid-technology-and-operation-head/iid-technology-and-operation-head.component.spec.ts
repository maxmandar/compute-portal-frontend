import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidTechnologyAndOperationHeadComponent } from './iid-technology-and-operation-head.component';

describe('IidTechnologyAndOperationHeadComponent', () => {
  let component: IidTechnologyAndOperationHeadComponent;
  let fixture: ComponentFixture<IidTechnologyAndOperationHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidTechnologyAndOperationHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidTechnologyAndOperationHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
