import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iid } from '../../interfaces/iid';
import { ActivatedRoute } from '@angular/router';
import { IidService } from '../../services/iid.service';
import { IidProject, IidWithDetails } from '../../interfaces/iid';
import { MatDatepickerModule } from '@angular/material/datepicker'; // import MatDatepickerModule here
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'old-app-iid-project-information',
  templateUrl: './old-id-project-information.component.html',
  styleUrls: ['./old-iid-project-information.component.css'],
})
export class OldIidProjectInformationComponent implements OnInit {
  iid: Iid;
  panelOpenState = false;

  segments: any[];
  subSegments: any[];

  projectInfoForm: FormGroup
  currentProjectId: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private iidService: IidService,
  ) { }


  ngOnInit(): void {
    this.buildForm();
    this.populateForm();
    this.fetchIidSegment();
    this.fetchIidSubSegment();
    
  }


  
  fetchIidSegment():void{

    this.iidService.getSegments().subscribe(
      data => {
        this.segments = data;
      }
    );
  }

  fetchIidSubSegment():void{

    this.iidService.getSubSegments().subscribe(
      data => {
        this.subSegments = data;
      }
    );
  }


  buildForm(): void {
    this.projectInfoForm = this.formBuilder.group({
      segment: ['', Validators.required],
      subSegment: ['', Validators.required],
      projectName: ['', Validators.required],
      budget: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      objectiveAndDescription: ['', Validators.required],
      projectSteeringCommitteeMembers: ['', Validators.required],
      technologyAndOperationsHead: ['', Validators.required],
      projectManager: ['', Validators.required],
      domainArchitect: ['', Validators.required],
      securityArchitect: ['', Validators.required],
      leadTechnicalDeliveryManager: ['', Validators.required],
      applicationL3: ['', Validators.required],
      tagcDate: ['', Validators.required],
      itcDate: ['', Validators.required],
      goLiveDate: ['', Validators.required],
    });
  }


  populateForm(): void {
    this.currentProjectId = +this.route.snapshot.paramMap.get('id');
    this.iidService.getIidById(this.currentProjectId).subscribe({
      next: (data: IidWithDetails) => {
        this.projectInfoForm.patchValue({
          projectName: data.name,
          objectiveAndDescription: data.description_objective,
          // populate other form fields here
        });
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Data retrieval complete');
      }
    });
  }


  onSubmit(): void {
    console.log(this.projectInfoForm.value);
  }

  onSave(): void {

  }

  onCancel(): void {
    if (this.panelOpenState) {
      this.panelOpenState = false;
      this.projectInfoForm.reset({});
      console.log('Panel closed and form is reset!');
    }
  }





}