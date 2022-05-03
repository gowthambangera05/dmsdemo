import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { QuickAccessRoutingModule } from './quick-access.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedDocumentsComponent } from './dashboard/shared-documents/shared-documents.component';
import { DelegatedRolesComponent } from './dashboard/delegated-roles/delegated-roles.component';
import { NewRepositoriesComponent } from './dashboard/new-repositories/new-repositories.component';

@NgModule({
  declarations: [
  
    DashboardComponent,
       SharedDocumentsComponent,
       DelegatedRolesComponent,
       NewRepositoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuickAccessRoutingModule
  ]
})
export class QuickAccessModule { }
