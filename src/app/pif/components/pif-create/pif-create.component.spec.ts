import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PifCreateComponent } from './pif-create.component';

describe('PifCreateComponent', () => {
  let component: PifCreateComponent;
  let fixture: ComponentFixture<PifCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PifCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PifCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
