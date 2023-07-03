import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariaDbCostSummaryComponent } from './maria-db-cost-summary.component';

describe('MariaDbCostSummaryComponent', () => {
  let component: MariaDbCostSummaryComponent;
  let fixture: ComponentFixture<MariaDbCostSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MariaDbCostSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MariaDbCostSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
