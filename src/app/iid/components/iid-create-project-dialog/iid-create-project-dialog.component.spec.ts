import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidCreateProjectDialogComponent } from './iid-create-project-dialog.component';

describe('IidCreateProjectDialogComponent', () => {
  let component: IidCreateProjectDialogComponent;
  let fixture: ComponentFixture<IidCreateProjectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidCreateProjectDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidCreateProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
