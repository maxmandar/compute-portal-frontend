import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PifUpdateComponent } from './pif-update.component';

describe('PifUpdateComponent', () => {
  let component: PifUpdateComponent;
  let fixture: ComponentFixture<PifUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PifUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PifUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
