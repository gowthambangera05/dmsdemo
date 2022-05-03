import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EmptyStateUiComponent } from './empty-state-ui/empty-state-ui.component';
import { ModalDialogTemplateComponent } from './modal-dialog-template/modal-dialog-template.component';
import { DialogContentExampleDialogComponent } from './modal-dialog-template/dialog-content-example-dialog/dialog-content-example-dialog.component';
import { TemplateRoutingModule } from './template.routing';
import { NewFolderComponent } from './new-folder/new-folder.component';
import { ListViewTemplateComponent } from './list-view-template/list-view-template.component';
import { CardViewTemplateComponent } from './card-view-template/card-view-template.component';
import { BreadcrumbTemplateComponent } from './breadcrumb-template/breadcrumb-template.component';
import { PageTitleTemplateComponent } from './page-title-template/page-title-template.component';
@NgModule({
  declarations: [
    EmptyStateUiComponent,
    ModalDialogTemplateComponent,
    DialogContentExampleDialogComponent,
    NewFolderComponent,
    ListViewTemplateComponent,
    CardViewTemplateComponent,
    BreadcrumbTemplateComponent,
    PageTitleTemplateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
