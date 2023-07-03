import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PifDeleteComponent } from './pif-delete.component';

describe('PifDeleteComponent', () => {
  let component: PifDeleteComponent;
  let fixture: ComponentFixture<PifDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PifDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PifDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
