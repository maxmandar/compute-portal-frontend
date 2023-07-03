import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IidService } from '../../services/iid.service';
import { Iid } from '../../interfaces/iid';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-iid-create',
  templateUrl: './iid-create.component.html',
  styleUrls: ['./iid-create.component.css']
})
export class IidCreateComponent implements OnInit {

  panelOpenState = false;
  isProjectInformationValid = false;
  

  iid: Iid;
  step = -1;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


 

  constructor(
    private route: ActivatedRoute,
    private iidService: IidService
  ) { }



  ngOnInit(): void {



  }


  onSave():void {

  }

  onSubmit():void {

  }

  onCancel(): void {
    if (this.panelOpenState) {
      this.panelOpenState = false;
      console.log('Panel closed and form is reset!');
    }
  }

  onProjectInformationValid() {
    this.isProjectInformationValid = true;
  }
  

}