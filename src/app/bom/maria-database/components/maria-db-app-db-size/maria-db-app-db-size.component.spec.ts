import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariaDbAppDbSizeComponent } from './maria-db-app-db-size.component';

describe('MariaDbAppDbSizeComponent', () => {
  let component: MariaDbAppDbSizeComponent;
  let fixture: ComponentFixture<MariaDbAppDbSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MariaDbAppDbSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MariaDbAppDbSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
