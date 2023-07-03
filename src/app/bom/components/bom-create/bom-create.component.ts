import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-bom-create',
  templateUrl: './bom-create.component.html',
  styleUrls: ['./bom-create.component.css']
})
export class BomCreateComponent {

  isLinear = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  
  


  constructor(private _formBuilder: FormBuilder) {}

}
