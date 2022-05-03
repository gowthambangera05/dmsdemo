import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EditPropertiesModalComponent } from 'src/app/shared/edit-properties-modal/edit-properties-modal.component';
import { AddMetadataTemplateModalComponent } from 'src/app/shared/add-metadata-template-modal/add-metadata-template-modal.component';
import { EditMetadataModalComponent } from 'src/app/repository/edit-metadata-modal/edit-metadata-modal.component';

@Component({
  selector: 'app-right-side-panel',
  templateUrl: './right-side-panel.component.html',
  styleUrls: ['./right-side-panel.component.scss']
})
export class RightSidePanelComponent implements OnInit {
  @Output() hamburger = new EventEmitter();
  panelOpenState = false;
  constructor(public dialog: MatDialog) {}
  


  openEditPropertiesDialog() {
    const dialogRef = this.dialog.open(EditPropertiesModalComponent,{panelClass: 'full-screen-dialog'});
  }
  openAddMetadataTemplateDialog() {
    const dialogRef = this.dialog.open(AddMetadataTemplateModalComponent,{panelClass: 'full-screen-dialog'});
  }
  openEditMetadataModalDialog() {
    const dialogRef = this.dialog.open(EditMetadataModalComponent,{panelClass: 'full-screen-dialog'});
  }


  ngOnInit(): void {
  }



}
