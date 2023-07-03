import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-iid-itc-date',
  templateUrl: './iid-itc-date.component.html',
  styleUrls: ['./iid-itc-date.component.css']
})
export class IidItcDateComponent {

  @Output() dateSelected = new EventEmitter<Date>();
  
  itcDateControl = new FormControl(null, Validators.required);

  onDateSelected(): void {
    if (this.itcDateControl.valid) {
      this.dateSelected.emit(this.itcDateControl.value);
    }
  }

}
