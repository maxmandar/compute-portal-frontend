import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private budgetSubject = new BehaviorSubject<number | null>(null);

  constructor(private logger: NGXLogger) { }

  setBudget(budget: number) {
    this.budgetSubject.next(budget);
    this.logger.info('Updated budget', budget);
  }

  getBudget() {
    return this.budgetSubject.asObservable();
  }
}
