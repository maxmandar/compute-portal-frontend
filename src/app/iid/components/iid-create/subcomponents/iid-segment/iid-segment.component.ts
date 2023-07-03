import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IidSegment } from 'src/app/iid/interfaces/iid';
import { IidService } from 'src/app/iid/services/iid.service';




@Component({
  selector: 'app-iid-segment',
  templateUrl: './iid-segment.component.html',
  styleUrls: ['./iid-segment.component.css']
})
export class IidSegmentComponent implements OnInit {

  @Output() segmentSelected = new EventEmitter<IidSegment>();

  segments$: Observable<IidSegment[]>;
  segmentFormControl = new FormControl('', Validators.required);

  constructor(private iidService: IidService) { }

  ngOnInit() {
    this.segments$ = this.iidService.getSegments();
  }

  getErrorMessage() {
    if (this.segmentFormControl.hasError('required')) {
      return 'You must select a segment';
    }
    return '';
  }

  onSegmentChange(segment: IidSegment) {
    if (this.segmentFormControl.valid) {
    
      // const segment = this.segmentFormControl.value
      console.log("Inside SegmentChange: ",segment )
      this.segmentSelected.emit(segment);
    }
  }
  
  

}
