import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from '../root/root.component';
import { WorkInProgressComponent } from '../shared/work-in-progress/work-in-progress.component';
import { ManageRepositoryComponent } from './manage-repository/manage-repository.component';
import { AddNewRepositoryComponent } from './add-new-repository/add-new-repository.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { AddMetadataTemplateComponent } from './add-metadata-template/add-metadata-template.component';
import { MetadataTemplateDetailsComponent } from './metadata-template-details/metadata-template-details.component';


export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
     
      {
        path: 'repository-details',
        component: RepositoryDetailsComponent
      },
      {
        path: 'new-repository',
       component: AddNewRepositoryComponent
      },
      {
        path: 'new-metadata-template',
        component: AddMetadataTemplateComponent
      },
      {
        path: 'metadata-template-details',
        component: MetadataTemplateDetailsComponent
      },
      {
        path: '',
        component: ManageRepositoryComponent
      },
      { 
        path: '**', 
        component: WorkInProgressComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantAdminRoutingModule { }
