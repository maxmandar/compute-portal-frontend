import { Component, OnInit } from '@angular/core';
import { BomService } from '../../services/bom.service';
import { BomResourceService } from '../../services/bom-resource.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-bom-resource',
  templateUrl: './bom-resource.component.html',
  styleUrls: ['./bom-resource.component.css']
})
export class BomResourceComponent {

  displayedColumns: string[] = ['environment', 'layer',  'application', 'hostname', 'clustering', 'operating_system', 'vcpu', 'ram_gb', 'edit'];
  dataSource: any[] = null;

  bomResources$: Observable<any[]> = null; // change bomResources to an observable

  constructor(private bomResourceService: BomResourceService) { }

  ngOnInit(): void {

    this.fetchBomResources()
    this.getBomResources()



  }

  fetchBomResources() {
    this.bomResourceService.fetchBomResources(2, 1);
  }

  getBomResources() {


    this.bomResourceService.getBomResources().subscribe(
      bomResources => {
        this.dataSource = bomResources.map(item => ({
          environment: item.environment,
          layer: item.layer,
          application: item.application.name,
          hostname: item.hostname,
          clustering: item.clustering,
          operating_system: item.operating_system.name,
          vcpu: item.size.vcpu,
          ram_gb: item.size.ram_gb
        }));
      }
    );
  }


  refreshDataSource() {
    this.fetchBomResources();
    this.getBomResources();
  }

  onEditClick(row: any){
    console.log(row)
  }
}