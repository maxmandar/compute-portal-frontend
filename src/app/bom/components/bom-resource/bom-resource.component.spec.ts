import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomResourceComponent } from './bom-resource.component';

describe('BomResourceComponent', () => {
  let component: BomResourceComponent;
  let fixture: ComponentFixture<BomResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BomResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
