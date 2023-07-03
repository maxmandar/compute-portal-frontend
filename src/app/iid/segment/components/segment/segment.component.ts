import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Segment } from '../../interfaces/segment';
import { SegmentService } from '../../services/segment.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {
  segments: Segment[];
  segmentControl = new FormControl('', Validators.required);

  constructor(private segmentService: SegmentService) { }

  ngOnInit(): void {
    this.segmentService.getSegments().subscribe(segments => {
      this.segments = segments;
    });
  }

  onSegmentChange(segment: Segment) {
    this.segmentService.setSelectedSegment(segment);
  }
}
