import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { IidService } from 'src/app/iid/services/iid.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent  implements OnInit {

  projectId: number ;
  project: any;


  constructor(private route: ActivatedRoute, private projectService: ProjectService,
    private readonly iidService: IidService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe(params => {
      console.log('Route params: ', params);
      this.projectId = params['id'];
      this.projectService.getProjectDetails(this.projectId).subscribe(data => {
        this.project = data;
      });
    });
  }


  goToIIDOverview() {
    console.log("Projectid: ",this.projectId )
    this.router.navigate(['project', this.projectId, 'iid' , 'overview']);
  }

  goToBOMOverview(){
    console.log("Projectid: ",this.projectId )
    this.router.navigate(['project', this.projectId, 'bom', 'overview']);

  }



}
