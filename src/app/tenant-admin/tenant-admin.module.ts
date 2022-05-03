import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TenantAdminRoutingModule } from './tenant-admin.routing';
import { ManageRepositoryComponent } from './manage-repository/manage-repository.component';
import { AddNewRepositoryComponent } from './add-new-repository/add-new-repository.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { PropertiesComponent } from './repository-details/properties/properties.component';
import { MetadataTemplateComponent } from './repository-details/metadata-template/metadata-template.component';
import { TagsComponent } from './repository-details/tags/tags.component';
import { CommentsComponent } from './repository-details/comments/comments.component';
import { UserAccessComponent } from './repository-details/user-access/user-access.component';
import { AddMetadataTemplateComponent } from './add-metadata-template/add-metadata-template.component';
import { MetadataTemplateDetailsComponent } from './metadata-template-details/metadata-template-details.component';
import { FieldsComponent } from './metadata-template-details/fields/fields.component';
import { TemplatePropertiesComponent } from './metadata-template-details/template-properties/template-properties.component';


@NgModule({
  declarations: [
    ManageRepositoryComponent,
    AddNewRepositoryComponent,
    RepositoryDetailsComponent,
    PropertiesComponent,
    MetadataTemplateComponent,
    TagsComponent,
    CommentsComponent,
    UserAccessComponent,
    AddMetadataTemplateComponent,
    MetadataTemplateDetailsComponent,
    FieldsComponent,
    TemplatePropertiesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TenantAdminRoutingModule,
 
  ]
})
export class TenantAdminModule { }
