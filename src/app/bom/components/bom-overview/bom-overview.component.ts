import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { BomCreateComponent } from '../bom-create/bom-create.component';

@Component({
  selector: 'app-bom-overview',
  templateUrl: './bom-overview.component.html',
  styleUrls: ['./bom-overview.component.css']
})
export class BomOverviewComponent {

  constructor(public dialog: MatDialog) {}

  openBomCreateDialog(): void{

    this.dialog.open(BomCreateComponent, {
      width: '800px',
      height: '400px'
    });
    

  }

}
