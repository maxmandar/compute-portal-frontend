import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PifDetailComponent } from './pif-detail.component';

describe('PifDetailComponent', () => {
  let component: PifDetailComponent;
  let fixture: ComponentFixture<PifDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PifDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PifDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
