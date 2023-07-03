import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';// to redirect post login correct route
import { ActivatedRoute } from '@angular/router';

import { ProjectPermissionComponent } from '../project-permission/project-permission.component';

@Component({
  selector: 'app-project-sidenav',
  templateUrl: './project-sidenav.component.html',
  styleUrls: ['./project-sidenav.component.css']
})
export class ProjectSidenavComponent implements OnInit {

  isExpanded: boolean = false;
  
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.router.navigate(['/project/list']);
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  openPermissionDialog() {
    const projectId = this.route.snapshot.paramMap.get('id');
    const dialogRef = this.dialog.open(ProjectPermissionComponent, {
      width: '800px',
      height: '800px',
      data: { projectId: projectId }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle any logic after the dialog is closed if needed
    });
  }

}
