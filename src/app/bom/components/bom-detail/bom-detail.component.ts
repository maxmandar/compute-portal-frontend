import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig  } from '@angular/material/dialog';

// import { VirtualServerComponent } from 'src/app/catalogue/components/virtual-server/virtual-server.component';




@Component({
  selector: 'app-bom-detail',
  templateUrl: './bom-detail.component.html',
  styleUrls: ['./bom-detail.component.css']
})
export class BomDetailComponent implements OnInit {

  projectId: number;
  bomId: number;

  selectedMenuItem: string;
  
  arrowIcon = 'keyboard_arrow_down';


  constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit() {
    this.projectId = +this.route.snapshot.paramMap.get('id');
    this.bomId = +this.route.snapshot.paramMap.get('bomId');
  }


  toggleArrow() {
    this.arrowIcon = this.arrowIcon === 'keyboard_arrow_down' ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
  }







}
