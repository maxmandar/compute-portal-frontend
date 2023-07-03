import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidSegmentComponent } from './iid-segment.component';

describe('IidSegmentComponent', () => {
  let component: IidSegmentComponent;
  let fixture: ComponentFixture<IidSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidSegmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
