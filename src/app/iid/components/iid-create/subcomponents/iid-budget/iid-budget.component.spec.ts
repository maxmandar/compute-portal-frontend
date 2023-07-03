import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidBudgetComponent } from './iid-budget.component';

describe('IidBudgetComponent', () => {
  let component: IidBudgetComponent;
  let fixture: ComponentFixture<IidBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidBudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
