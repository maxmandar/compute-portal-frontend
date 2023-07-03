import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidTagcDateComponent } from './iid-tagc-date.component';

describe('IidTagcDateComponent', () => {
  let component: IidTagcDateComponent;
  let fixture: ComponentFixture<IidTagcDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidTagcDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidTagcDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
