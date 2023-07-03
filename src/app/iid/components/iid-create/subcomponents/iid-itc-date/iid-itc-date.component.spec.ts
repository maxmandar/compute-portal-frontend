import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidItcDateComponent } from './iid-itc-date.component';

describe('IidItcDateComponent', () => {
  let component: IidItcDateComponent;
  let fixture: ComponentFixture<IidItcDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidItcDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidItcDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
