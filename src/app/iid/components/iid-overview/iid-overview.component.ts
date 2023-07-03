import { Component } from '@angular/core';

import { IidCreateComponent } from '../iid-create/iid-create.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-iid-overview',
  templateUrl: './iid-overview.component.html',
  styleUrls: ['./iid-overview.component.css']
})
export class IidOverviewComponent {

  constructor(public dialog: MatDialog) {} // inject MatDialog

  openCreateIIDDialog(): void {
    const dialogRef = this.dialog.open(IidCreateComponent, {
      width: '1200px', // set the desired width of the dialog
      // Add other dialog configuration options as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
