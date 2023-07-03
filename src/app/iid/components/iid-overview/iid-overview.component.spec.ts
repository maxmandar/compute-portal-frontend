import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidOverviewComponent } from './iid-overview.component';

describe('IidOverviewComponent', () => {
  let component: IidOverviewComponent;
  let fixture: ComponentFixture<IidOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
