import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApplicationCatalogueService } from 'src/app/shared/services/application-catalogue.service';
import { ApplicationCatalogue } from 'src/app/shared/interfaces/application-catalogue';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-iid-it-system-recoverability',
  templateUrl: './iid-it-system-recoverability.component.html',
  styleUrls: ['./iid-it-system-recoverability.component.css']
})
export class IidItSystemRecoverabilityComponent implements OnInit {

  @ViewChild('applicationInput') applicationInput: ElementRef<HTMLInputElement>;

  allAapplications: ApplicationCatalogue[] = [];
  // filteredApplication: ApplicationCatalogue[] = [];

  displayedColumns: string[] = ['name', 'code', 'owner', 'description', 'dr_tier'];
  
  dataSource: ApplicationCatalogue[] = [];
  
  selectedApplications: ApplicationCatalogue[] = [];

  applicationControl = new FormControl('', Validators.required);

  filteredApplication: Observable<ApplicationCatalogue[]>;



  constructor(private applicationCatalogueService: ApplicationCatalogueService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getApplications();
    this.filterApplication();
  }

  // Fetch a list of all applications
  getApplications(): void {
    this.applicationCatalogueService.getApplications()
      .subscribe(applications => {
        this.allAapplications = applications;
      });
  }

  filterApplication(): void {
    this.filteredApplication = this.applicationControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterApplication(value)),
    )
  }

  private _filterApplication(value: string | ApplicationCatalogue): ApplicationCatalogue[] {
    console.log("Value:",value)
    // const filterValue1 = value.toLowerCase()
    const filterValue = (typeof value === 'string' ? value : value.name).toLowerCase();
    return this.allAapplications.filter(application => application.name.toLowerCase().includes(filterValue))

  }


  //

  selected(selectedApplication:MatAutocompleteSelectedEvent):void{
    console.log("SelectedApppication", selectedApplication)
    this.applicationInput.nativeElement.value = '';
    const application = selectedApplication.option.value
    if (this.selectedApplications.some(e => e === application)) {
      this.snackBar.open('Application already in the table', 'Close', { duration: 2000 });
      this.applicationInput.nativeElement.value = '';
      return;
    }

    this.selectedApplications.push(selectedApplication.option.value);
    this.dataSource = [...this.selectedApplications];
    // this.selectedEmployeesChange.emit(this.selectedEmployees);
    // this.memberEmployeeInput.nativeElement.value = '';
  

  }

  removeApplication(index: number): void {
    this.selectedApplications.splice(index, 1);
    this.dataSource = [...this.selectedApplications];
  }

}



