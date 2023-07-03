import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariaDbCreateComponent } from './maria-db-create.component';

describe('MariaDbCreateComponent', () => {
  let component: MariaDbCreateComponent;
  let fixture: ComponentFixture<MariaDbCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MariaDbCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MariaDbCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
