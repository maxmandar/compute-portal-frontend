import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-iid-tagc-date',
  templateUrl: './iid-tagc-date.component.html',
  styleUrls: ['./iid-tagc-date.component.css']
})
export class IidTagcDateComponent {
  @Output() dateSelected = new EventEmitter<Date>();

  tagcDateControl = new FormControl(null, Validators.required);

  onDateSelected(): void {
    if (this.tagcDateControl.valid) {
      this.dateSelected.emit(this.tagcDateControl.value);
    }
  }


}
