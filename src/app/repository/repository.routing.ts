﻿import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from '../root/root.component';
import { WorkInProgressComponent } from '../shared/work-in-progress/work-in-progress.component';
import { NewFolderComponent } from './new-folder/new-folder.component';
import { RepositoryComponent } from './repository/repository.component';
import { FileDetailsComponent } from './file-details/file-details.component';
import { RepoDetailsComponent } from './repository-details/repository-details.component';
import { FolderViewComponent } from './folder-view/folder-view.component';
import { FolderDetailsComponent } from './folder-view/folder-details/folder-details.component';
import { UploadFileModalComponent } from './upload-file-modal/upload-file-modal.component';
import { FolderVewFileDetailsComponent } from './folder-view/folder-vew-file-details/folder-vew-file-details.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        component: RepositoryComponent
      },
      {
        path: 'new-folder',
        component: NewFolderComponent
      },
      {
        path: 'file-details',
        component: FileDetailsComponent
      },
      {
        path: 'folder-view-file-details',
        component: FolderVewFileDetailsComponent
      },
      {
        path: 'repository-details',
        component: RepoDetailsComponent
      },
      {
        path: 'folder-view',
        component: FolderViewComponent
      },
      {
        path: 'folder-details',
        component: FolderDetailsComponent
      },
      {
        path: 'upload-file',
        component: UploadFileModalComponent
      },
     
    
      {
        path: '',
        redirectTo: '/repository',
        component: RepositoryComponent
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
export class RepositoryRoutingModule { }
