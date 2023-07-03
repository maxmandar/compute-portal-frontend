import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomItemCreateComponent } from './bom-item-create.component';

describe('BomItemCreateComponent', () => {
  let component: BomItemCreateComponent;
  let fixture: ComponentFixture<BomItemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomItemCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BomItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
