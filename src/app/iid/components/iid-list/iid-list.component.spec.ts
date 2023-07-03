import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidListComponent } from './iid-list.component';

describe('IidListComponent', () => {
  let component: IidListComponent;
  let fixture: ComponentFixture<IidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
