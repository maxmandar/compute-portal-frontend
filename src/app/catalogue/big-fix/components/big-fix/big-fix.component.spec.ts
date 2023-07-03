import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFixComponent } from './big-fix.component';

describe('BigFixComponent', () => {
  let component: BigFixComponent;
  let fixture: ComponentFixture<BigFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigFixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
