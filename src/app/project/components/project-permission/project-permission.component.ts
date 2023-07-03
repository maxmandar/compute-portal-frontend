import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { ProjectPermissionService } from '../../services/project-permission.service';
import { ProjectPermission } from '../../interfaces/project';
import { ProjectAddUserComponent } from '../project-add-user/project-add-user.component';

@Component({
  selector: 'app-project-permission',
  templateUrl: './project-permission.component.html',
  styleUrls: ['./project-permission.component.css']
})
export class ProjectPermissionComponent implements OnInit {
  displayedColumns: string[] = ['username', 'fullname', 'email', 'role'];
  dataSource = new MatTableDataSource<ProjectPermission>([]);
  projectId: number;

  constructor(
    private projectPermissionService: ProjectPermissionService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.projectId = Number(this.route.parent.snapshot.paramMap.get('id'));
    this.logger.info('ProjectPermissionComponent initialized');
    this.logger.debug('Project ID:', this.projectId);
    this.listProjectPermissions();
  }

  listProjectPermissions(): void {
    this.projectPermissionService.listProjectPermissions(this.projectId).subscribe({
        next: (data: ProjectPermission[]) => {
            this.logger.debug('Fetched permissions:', data);
            this.dataSource.data = data;
        },
        error: (error: any) => {
            this.logger.error('Error fetching permissions:', error);
        },
        complete: () => {
            this.logger.info('Completed fetching permissions');
        }
    });
}


createProjectPermission(): void {
  let newRole = null;
  this.projectPermissionService.createProjectPermission(this.projectId, newRole).subscribe({
      next: (data: ProjectPermission) => {
          this.logger.info('New permission created:', data);
          this.dataSource.data = [...this.dataSource.data, data];
      },
      error: (error: any) => {
          this.logger.error('Error creating new permission:', error);
      },
      complete: () => {
          this.logger.info('Completed creating new permission');
      }
  });
}

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(ProjectAddUserComponent, {
      width: '400px',
      data: { projectId: this.projectId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.info('The dialog was closed');
      this.listProjectPermissions();
    });
  }
}
