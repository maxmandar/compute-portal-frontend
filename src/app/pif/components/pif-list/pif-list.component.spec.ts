import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PifListComponent } from './pif-list.component';

describe('PifListComponent', () => {
  let component: PifListComponent;
  let fixture: ComponentFixture<PifListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PifListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
