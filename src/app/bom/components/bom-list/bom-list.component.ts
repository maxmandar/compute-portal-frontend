import { Component, OnInit } from '@angular/core';
import { Bom } from '../../interfaces/bom';
import { BomService } from '../../services/bom.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

import { IidCreateProjectDialogComponent } from 'src/app/iid/components/iid-create-project-dialog/iid-create-project-dialog.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/login';

@Component({
  selector: 'app-bom-list',
  templateUrl: './bom-list.component.html',
  styleUrls: ['./bom-list.component.css']
})
export class BomListComponent {
  
  boms: Bom[] = null;
  searchText: string = '';
  user: User;

  projectId: number;


  
  constructor(private bomService: BomService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getBoms();

    this.projectId = +this.route.snapshot.paramMap.get('id');

    console.log("this.projectId", this.projectId)
    


  }

  getBoms(): void{

    this.bomService.getBomList()
    .subscribe(boms => {
      this.boms = boms;
    });

  }


  filterBoms(): Bom[] {
    if (!this.searchText) {
      return this.boms;
    }

    return this.boms.filter(bom =>
      bom.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      bom.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  navigateToBomDetail(bomId: number) {

    this.router.navigate(['/project', this.projectId, 'bom', bomId]);
    // this.router.navigate(['/project', projectId, 'iidcreate']);
  }


  getColorForStatus(status: string): string {
    switch (status) {
      case 'requested':
        return 'primary';
      case 'reviewed':
        return 'accent';
      case 'revision':
        return 'warn';
      case 'approved':
        return 'primary';
      case 'rejected':
        return 'warn';
      default:
        return '';
    }
  }

  getIconForStatus(status: string): string {
    switch (status) {
      case 'requested':
        return 'pending';
      case 'reviewed':
        return 'done_all';
      case 'revision':
        return 'autorenew';
      case 'approved':
        return 'check_circle';
      case 'rejected':
        return 'cancel';
      default:
        return '';
    }
  }




}
