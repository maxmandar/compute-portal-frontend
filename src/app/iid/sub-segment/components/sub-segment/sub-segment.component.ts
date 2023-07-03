import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SubSegment } from '../../interfaces/sub-segment';
import { SubSegmentService } from '../../services/sub-segment.service';

@Component({
  selector: 'app-sub-segment',
  templateUrl: './sub-segment.component.html',
  styleUrls: ['./sub-segment.component.css']
})
export class SubSegmentComponent implements OnInit {
  subSegments: SubSegment[];
  subSegmentControl = new FormControl('', Validators.required);

  constructor(private subSegmentService: SubSegmentService) { }

  ngOnInit(): void {
    this.subSegmentService.getSubSegments().subscribe(subSegments => {
      this.subSegments = subSegments;
    });
  }

  onSubSegmentChange(subSegment: SubSegment) {
    this.subSegmentService.setSelectedSubSegment(subSegment);
  }
}
