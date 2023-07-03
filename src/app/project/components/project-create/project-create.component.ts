import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ProjectService } from '../../services/project.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent  implements OnInit  {
  projectForm: FormGroup;

  constructor(
    private projectService: ProjectService,
    public dialogRef: MatDialogRef<ProjectCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
  ) { }


  ngOnInit(): void {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }


  onSaveClick(): void {
    if (this.projectForm.valid) {
      const data = {
        name: this.projectForm.value.name,
        description_objective: this.projectForm.value.description
      };

      this.projectService.createProject(data)
        .pipe(
          tap(response => {
            // handle success
            console.log('Project created successfully', response);
            this.dialogRef.close({project: response, created: true});
            // show success message
            this.snackBar.open('Project saved successfully', 'Close', {
              duration: 2000, // display message for 2 seconds
            });

          }),
          catchError(error => {
            // handle error
            console.error('Error creating project', error);
            if (error.status === 400 && error.error.description_objective) {
              this.projectForm.controls['description'].setErrors({ serverError: error.error.description_objective[0] });
            }
            this.dialogRef.close({created: false, error: error});
            
            return of(null);
          })
        )
        .subscribe();
    }
  }

}
