
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { NgMaterialMultilevelMenuModule, MultilevelMenuService } from 'ng-material-multilevel-menu';
import { RootPageNotFoundComponent } from './page-not-found/root/root-page-not-found.component';
import { MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material/paginator';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatTreeModule } from '@angular/material/tree';
import { MoveCopyModalComponent } from './move-copy-modal/move-copy-modal.component';
import { EditPropertiesModalComponent } from './edit-properties-modal/edit-properties-modal.component';
import { AddMetadataTemplateModalComponent } from './add-metadata-template-modal/add-metadata-template-modal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditMetadataTemplateModalComponent } from './edit-metadata-template-modal/edit-metadata-template-modal.component';
import { NewMetadataFieldModalComponent } from './new-metadata-field-modal/new-metadata-field-modal.component';
import { EditRepositoryPropertiesModalComponent } from './edit-repository-properties-modal/edit-repository-properties-modal.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    UnauthorizedComponent,
    PageNotFoundComponent,
    LoadingSpinnerComponent,
    WorkInProgressComponent,
    RootPageNotFoundComponent,
    MoveCopyModalComponent,
    EditPropertiesModalComponent,
    AddMetadataTemplateModalComponent,
    EditMetadataTemplateModalComponent,
    NewMetadataFieldModalComponent,
    EditRepositoryPropertiesModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    RouterModule,
    NgMaterialMultilevelMenuModule,
    MatTooltipModule,
    MatInputModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    DragDropModule,
    MatAutocompleteModule,
    MatTreeModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NavigationComponent,
    LoadingSpinnerComponent,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatSidenavModule,
    NgMaterialMultilevelMenuModule,
   MatTooltipModule,
    WorkInProgressComponent,
    MatInputModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    DragDropModule,
    MatAutocompleteModule,
    MatTreeModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
   MultilevelMenuService
  ]
})
export class SharedModule { }
