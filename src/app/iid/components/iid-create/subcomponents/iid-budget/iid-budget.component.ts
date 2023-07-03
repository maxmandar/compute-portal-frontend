// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Component, OnInit, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { NgxCurrencyModule } from "ngx-currency";


@Component({
  selector: 'app-iid-budget',
  templateUrl: './iid-budget.component.html',
  styleUrls: ['./iid-budget.component.css']
})

export class IidBudgetComponent {
  @Output() budgetSelected = new EventEmitter<number>();

  budgetControl = new FormControl(null, Validators.required);

  ngOnInit() {

    
  this.budgetControl.valueChanges.subscribe((value) => {
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
    
      const budget = parseFloat(value);
      console.log("Budget value:",budget )
      this.budgetSelected.emit(budget);
    }
  });
  }


 
}
