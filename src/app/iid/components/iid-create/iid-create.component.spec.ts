import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidCreateComponent } from './iid-create.component';

describe('IidCreateComponent', () => {
  let component: IidCreateComponent;
  let fixture: ComponentFixture<IidCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
