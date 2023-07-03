import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module'; // add this line
import { IidRoutingModule } from './iid-routing.module';
import { NgxCurrencyModule } from 'ngx-currency';


import { IidListComponent } from './components/iid-list/iid-list.component';
import { IidCreateComponent } from './components/iid-create/iid-create.component';
import { IidDeleteComponent } from './components/iid-delete/iid-delete.component';
import { IidDetailComponent } from './components/iid-detail/iid-detail.component';
import { IidUpdateComponent } from './components/iid-update/iid-update.component';
import { IidService } from './services/iid.service';
import { IidCreateProjectDialogComponent } from './components/iid-create-project-dialog/iid-create-project-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon';

import { IidProjectInformationComponent } from './components/iid-create/subcomponents/iid-project-information/iid-project-information.component';
import { OldIidProjectInformationComponent } from './components/old-iid-project-information/old-iid-project-information.component';

import { IidSegmentComponent } from './components/iid-create/subcomponents/iid-segment/iid-segment.component';
import { IidSubsegmentComponent } from './components/iid-create/subcomponents/iid-subsegment/iid-subsegment.component';

import { IidProjectSteeringComponent } from './components/iid-project-steering/iid-project-steering.component';
import { IidProjectSteeringCommitteeMembersComponent } from './components/iid-create/subcomponents/iid-project-steering-committee-members/iid-project-steering-committee-members.component';
import { IidTechnologyAndOperationHeadComponent } from './components/iid-create/subcomponents/iid-technology-and-operation-head/iid-technology-and-operation-head.component';
import { IidDomainArchitectComponent } from './components/iid-create/subcomponents/iid-domain-architect/iid-domain-architect.component';
import { IidSecurityArchitectComponent } from './components/iid-create/subcomponents/iid-security-architect/iid-security-architect.component';
import { IidLeadTechnicalDelieveryManagerComponent } from './components/iid-create/subcomponents/iid-lead-technical-delievery-manager/iid-lead-technical-delievery-manager.component';
import { IidApplicationL3Component } from './components/iid-create/subcomponents/iid-application-l3/iid-application-l3.component';
import { IidTagcDateComponent } from './components/iid-create/subcomponents/iid-tagc-date/iid-tagc-date.component';
import { IidItcDateComponent } from './components/iid-create/subcomponents/iid-itc-date/iid-itc-date.component';
import { IidGoliveDateComponent } from './components/iid-create/subcomponents/iid-golive-date/iid-golive-date.component';
import { IidBudgetComponent } from './components/iid-create/subcomponents/iid-budget/iid-budget.component';
import { IidProjectManagerComponent } from './components/iid-create/subcomponents/iid-project-manager/iid-project-manager.component';
import { CurrencyWithCommasPipe } from './pipes/currency-with-commas.pipe';
import { NumberWithCommasPipe } from './pipes/number-with-commas.pipe';


import { IidItSystemRecoverabilityComponent } from './components/iid-create/subcomponents/iid-it-system-recoverability/iid-it-system-recoverability.component';
import { IidOverviewComponent } from './components/iid-overview/iid-overview.component';
import { SegmentComponent } from './segment/components/segment/segment.component';
import { SubSegmentComponent } from './sub-segment/components/sub-segment/sub-segment.component';
import { BudgetComponent } from './budget/components/budget/budget.component';
import { ProjectSteeringCommitteeComponent } from './project-steering-committee/components/project-steering-committee/project-steering-committee.component';
import { ProjectManagerComponent } from './project-manager/components/project-manager/project-manager.component';




@NgModule({
  declarations: [
    IidListComponent,
    IidCreateComponent,
    IidDeleteComponent,
    IidDetailComponent,
    IidUpdateComponent,
    IidCreateProjectDialogComponent,
    OldIidProjectInformationComponent,
    IidProjectInformationComponent,
    IidProjectSteeringComponent,
    IidSegmentComponent,
    IidSubsegmentComponent,
    IidProjectSteeringCommitteeMembersComponent,
    IidTechnologyAndOperationHeadComponent,
    IidDomainArchitectComponent,
    IidSecurityArchitectComponent,
    IidLeadTechnicalDelieveryManagerComponent,
    IidApplicationL3Component,
    IidTagcDateComponent,
    IidItcDateComponent,
    IidGoliveDateComponent,
    IidBudgetComponent,
    IidProjectManagerComponent,
    CurrencyWithCommasPipe,
    NumberWithCommasPipe,
    IidItSystemRecoverabilityComponent,
    IidOverviewComponent,
    SegmentComponent,
    SubSegmentComponent,
    BudgetComponent,
    ProjectSteeringCommitteeComponent,
    ProjectManagerComponent,
    

  ],
  imports: [
    CommonModule,
    MaterialModule,
    IidRoutingModule,
    ReactiveFormsModule, // Add this line
    FormsModule,
    MatChipsModule,
    MatIconModule,
    NgxCurrencyModule

  ],
  providers: [
    IidService
  ]
})
export class IidModule { }
