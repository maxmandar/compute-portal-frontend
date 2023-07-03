import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig  } from '@angular/material/dialog';

import { VmwareServerCreateComponent } from '../../vmware-server/components/vmware-server-create/vmware-server-create.component';

@Component({
  selector: 'app-bom-item-create',
  templateUrl: './bom-item-create.component.html',
  styleUrls: ['./bom-item-create.component.css']
})
export class BomItemCreateComponent {

  arrowIcon = 'keyboard_arrow_down';
  selectedMenuItem: string;

  constructor( private dialog: MatDialog) {}


  toggleArrow() {
    this.arrowIcon = this.arrowIcon === 'keyboard_arrow_down' ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
  }


  onMenuItemClick(menuItem: string) {
    this.selectedMenuItem = menuItem;
    this.arrowIcon = 'keyboard_arrow_down';
  }

  openVmwareServerDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '1400px'; // Set the dialog width to 800px
    const dialogRef = this.dialog.open(VmwareServerCreateComponent,dialogConfig)
  }



  onMenuItemClicknew(menuItem: string) {
    this.selectedMenuItem = menuItem;
    this.arrowIcon = 'keyboard_arrow_down';
    
    if (menuItem === 'Vmware Server') {
      this.openVmwareServerDialog();
    } 
    else if (menuItem === 'Database Server') {
      this.openVmwareServerDialog();
    }

  }

}
