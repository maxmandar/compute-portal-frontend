import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidSubsegmentComponent } from './iid-subsegment.component';

describe('IidSubsegmentComponent', () => {
  let component: IidSubsegmentComponent;
  let fixture: ComponentFixture<IidSubsegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidSubsegmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidSubsegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
