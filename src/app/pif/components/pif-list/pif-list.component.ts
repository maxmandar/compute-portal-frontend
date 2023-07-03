import { Component, OnInit } from '@angular/core';
import { PifService } from '../../services/pif.service';
import { Pif } from '../../interfaces/pif';

@Component({
  selector: 'app-pif-list',
  templateUrl: './pif-list.component.html',
  styleUrls: ['./pif-list.component.css']
})
export class PifListComponent implements OnInit {

  pifs: Pif[] = [];

  constructor(private pifService: PifService) { }



  ngOnInit(): void {
    // Fetch the list of PIFs when the component is initialized
    this.fetchPifs();
  }

  private fetchPifs(): void {
    // Subscribe to the observable returned by the PIF service
    this.pifService.getPifs().subscribe({
      // Handle the response if successful
      next: (pifs: Pif[]) => {
        this.pifs = pifs;
      },
      // Handle errors
      error: (error) => {
        console.log('Error fetching PIFs:', error);
      },
      // Handle the completion of the observable stream
      complete: () => {
        console.log('Finished fetching PIFs.');
      }
    });
  }

}
