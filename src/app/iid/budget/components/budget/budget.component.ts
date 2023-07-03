import { Component, OnInit } from '@angular/core';
import { FormControl,Validators  } from '@angular/forms';

import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  public budgetInput: FormControl;


  constructor(private budgetService: BudgetService) {
    this.budgetInput = new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(10000000000)
    ]);
  }

  ngOnInit() {
    this.budgetInput.valueChanges.subscribe(value => {
      this.budgetService.setBudget(value);
    });
  }
}
