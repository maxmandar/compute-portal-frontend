import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';
import { ProjectService } from '../../services/project.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { IidCreateProjectDialogComponent } from 'src/app/iid/components/iid-create-project-dialog/iid-create-project-dialog.component';
import { ProjectCreateComponent } from '../project-create/project-create.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/login';
import { LayoutModule } from 'src/app/layout/layout.module';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];
  searchText: string = '';
  user: User;


  showSearchForm = false;



  
  
  constructor(private projectService: ProjectService, private readonly dialog: MatDialog,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {

    this.getProjects();
    
  }


  openCreateProjectDialog(): void {
    const dialogRef = this.dialog.open(ProjectCreateComponent, {
      width: '800px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result && result.created) {

      // refresh the table
      this.getProjects();

      } else if (result && result.error) {
        // handle the error
        console.error('Error creating project', result.error);
        // show error message to user
      }
    });
  }

  getProjects(): void{

    this.projectService.listProject()
    .subscribe(projects => {
      this.projects = projects;
    });

  }


  filterProjects(): Project[] {
    if (!this.searchText) {
      return this.projects;
    }

    return this.projects.filter(project =>
      project.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      project.description_objective.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  navigateToProjectDetail(projectId: number) {

    this.router.navigate(['project',  projectId, 'overview']);
    // this.router.navigate(['/project', projectId, 'iidcreate']);
  }





  toggleSearchForm() {
    this.showSearchForm = !this.showSearchForm;
  }
  

  //login code
  
  getUserInfo():void {
    this.authService.getUserInfo().subscribe({
      next: user => {
        console.log(`Hello, ${user.username}!`);
        this.user = user; // Set the user property
      },
      error: error => {
        console.error(error);
      }
    });

  }


  onLogout() {
    this.user = null; // Set user to null
    this.authService.logout();

  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }


}
