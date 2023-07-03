import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MssqlDbCostSummaryComponent } from './mssql-db-cost-summary.component';

describe('MssqlDbCostSummaryComponent', () => {
  let component: MssqlDbCostSummaryComponent;
  let fixture: ComponentFixture<MssqlDbCostSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MssqlDbCostSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MssqlDbCostSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
