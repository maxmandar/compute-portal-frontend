import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { SubSegment } from '../interfaces/sub-segment';
import { SubSegmentApiService } from './sub-segment-api.service';

@Injectable({
  providedIn: 'root'
})
export class SubSegmentService {

  private selectedSubSegmentSubject = new BehaviorSubject<SubSegment | null>(null);

  constructor(private logger: NGXLogger, private subSegmentApiService: SubSegmentApiService) {
    // Fetch the sub-segments from the server and set the first one as the selected sub-segment
    this.subSegmentApiService.getSubSegments().subscribe(
      subSegments => this.setSelectedSubSegment(subSegments[0]),
      error => this.logger.error('An error occurred when fetching sub-segments', error)
    );
  }

  setSelectedSubSegment(subSegment: SubSegment): void {
    this.selectedSubSegmentSubject.next(subSegment);
    this.logger.info('Updated selected sub-segment', subSegment); 
  }

  getSelectedSubSegment(): Observable<SubSegment | null> {
    return this.selectedSubSegmentSubject.asObservable();
  }

  getCurrentValue(): SubSegment | null {
    const currentValue = this.selectedSubSegmentSubject.getValue();
    this.logger.debug('Retrieved current value of selected sub-segment', currentValue);
    return currentValue
  }

  getSubSegments() {
    return this.subSegmentApiService.getSubSegments();
  }

}
