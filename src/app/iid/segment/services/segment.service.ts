import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { Segment } from '../interfaces/segment';
import { SegmentApiService } from './segment-api.service';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  private selectedSegmentSubject = new BehaviorSubject<Segment | null>(null);

  constructor(private logger: NGXLogger, private segmentApiService: SegmentApiService) {
    // Fetch the segments from the server and set the first one as the selected segment
    this.segmentApiService.getSegments().subscribe(
      segments => this.setSelectedSegment(segments[0]),
      error => this.logger.error('An error occurred when fetching segments', error)
    );
  }

  setSelectedSegment(segment: Segment): void {
    this.selectedSegmentSubject.next(segment);
    this.logger.info('Updated selected segment', segment); 
  }

  getSelectedSegment(): Observable<Segment | null> {
    return this.selectedSegmentSubject.asObservable();
  }

  getCurrentValue(): Segment | null {
    const currentValue = this.selectedSegmentSubject.getValue();
    this.logger.debug('Retrieved current value of selected segment', currentValue);
    return currentValue
  }

  getSegments() {
    return this.segmentApiService.getSegments();
  }

}
