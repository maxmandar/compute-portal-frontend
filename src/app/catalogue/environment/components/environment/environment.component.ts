import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { dummyEnvironments, Environment } from '../../interfaces/environment';
import { EnvironmentService } from '../../services/environment.service';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit{
  environments : Environment[] = null;
  selectedEnvironment = new FormControl('', Validators.required);

  constructor(private environmentService: EnvironmentService) {}
  
  ngOnInit(): void {
    this.getEnvironments()
       
  }

  getEnvironments(){
    this.environments = dummyEnvironments
    //from backend.
  }


  onSelectedEnvironment(environment: Environment){
    this.environmentService.setSelectedEnvironment(environment);
  }

 

  


}
