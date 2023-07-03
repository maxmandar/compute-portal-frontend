import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-iid-golive-date',
  templateUrl: './iid-golive-date.component.html',
  styleUrls: ['./iid-golive-date.component.css']
})
export class IidGoliveDateComponent {

  @Output() dateSelected = new EventEmitter<Date>();

  goliveDateControl = new FormControl(null, Validators.required);

  onDateSelected(): void {
    if (this.goliveDateControl.valid) {
      this.dateSelected.emit(this.goliveDateControl.value);
    }
  }

}
