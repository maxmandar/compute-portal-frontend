import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NGXLogger } from 'ngx-logger';
import { ProjectPermissionService } from '../../services/project-permission.service';

@Component({
  selector: 'app-project-add-user',
  templateUrl: './project-add-user.component.html',
  styleUrls: ['./project-add-user.component.css']
})
export class ProjectAddUserComponent implements OnInit {
  roles: any[] = [];
  
  addUserForm = new FormGroup({
    username: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', Validators.required)
  });

  constructor(
    public dialogRef: MatDialogRef<ProjectAddUserComponent>,
    private projectPermissionService: ProjectPermissionService,
    private logger: NGXLogger,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.logger.info('ProjectAddUserComponent initialized');
    this.listProjectUserRole();
  }

  listProjectUserRole() {
    this.projectPermissionService.listProjectUserRole().subscribe((roles: any[]) => {
      this.roles = roles;
      this.logger.debug('Fetched roles', roles);
    }, (error) => {
      this.logger.error('Error fetching roles', error);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddUserClick(): void {
    const projectId = this.data.projectId;
    this.logger.debug('ProjectId', projectId);
    this.logger.debug('addUserForm validity', this.addUserForm.valid);

    if (this.addUserForm.valid && projectId) {
      const newUser = this.addUserForm.value;
      this.logger.info('newUser', newUser)

      this.projectPermissionService.createProjectPermission(+projectId, newUser).subscribe({
        next: (response) => {
          this.logger.info('Response from createProjectPermission', response);
          this.dialogRef.close();
          this.openSnackBar('User successfully added!', 'Close');
        },
        error: (error) => {
          this.logger.error('Error creating user', error);
          this.openSnackBar('Error adding user. Please try again.', 'Close'); // Open a snack bar for the error
        }
      });
    }
  }


  openSnackBar(message: string, action: string) { // Add this method
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
