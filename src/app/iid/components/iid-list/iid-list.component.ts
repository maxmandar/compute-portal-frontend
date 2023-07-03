import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Iid } from '../../interfaces/iid';
import { IidService } from '../../services/iid.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { IidCreateProjectDialogComponent } from '../iid-create-project-dialog/iid-create-project-dialog.component';

import { Router } from '@angular/router';


@Component({
  selector: 'app-iid-list',
  templateUrl: './iid-list.component.html',
  styleUrls: ['./iid-list.component.css']
})




export class IidListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  iids: Iid[] = [];
  displayedColumns: string[] = ['id',  'name', 'description_objective', 'requestor', 'fsm_state', 'action'];
  dataSource: MatTableDataSource<Iid>;




  constructor(private readonly iidService: IidService, private readonly dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getIidProjects()
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getIidProjects(): void {
    this.iidService.getIids().subscribe((iids: Iid[]) => {
      this.iids = iids;
      console.log("IID list:", this.iids)
      this.dataSource = new MatTableDataSource(this.iids);
      this.dataSource.sort = this.sort;
      this.dataSource.sort.direction = 'desc';
      this.dataSource.sort.active = 'id';
      this.dataSource.paginator = this.paginator;
      
     
    });
  }

  openIidCreateProjectDialog(): void {
    const dialogRef = this.dialog.open(IidCreateProjectDialogComponent, {
      width: '800px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result && result.created) {
        // refresh the table
        this.getIidProjects();
      } else if (result && result.error) {
        // handle the error
        console.error('Error creating project', result.error);
        // show error message to user
      }
    });
  }


  openIidCreateDialog(row: any): void {
    console.log('id:', row.id);
    if (row && row.id) {
      this.router.navigate(['iid/create', row.id]);
    }
  }





}
