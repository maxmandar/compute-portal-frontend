import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IidSubSegment } from 'src/app/iid/interfaces/iid';
import { IidService } from 'src/app/iid/services/iid.service';




@Component({
  selector: 'app-iid-subsegment',
  templateUrl: './iid-subsegment.component.html',
  styleUrls: ['./iid-subsegment.component.css']
})
export class IidSubsegmentComponent implements OnInit {

  @Output() subSegmentSelected = new EventEmitter<IidSubSegment>();

  subSegments$: Observable<IidSubSegment[]>;
  subSegmentFormControl = new FormControl('', Validators.required);
  subSegment: IidSubSegment

  constructor(private iidService: IidService) { }

  ngOnInit() {
    this.subSegments$ = this.iidService.getSubSegments();
  }

  getErrorMessage() {
    if (this.subSegmentFormControl.hasError('required')) {
      return 'You must select a Sub-Segment';
    }
    return '';
  }

  onSubSegmentChange(subSegment:IidSubSegment) {
    if (this.subSegmentFormControl.valid) {
      this.subSegment = subSegment
      // const subSegmentId = parseInt(this.subSegmentFormControl.value, 10);
      this.subSegmentSelected.emit(this.subSegment);
    }
  }
  
  

}
