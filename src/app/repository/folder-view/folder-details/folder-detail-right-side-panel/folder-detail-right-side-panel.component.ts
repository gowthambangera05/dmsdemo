import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EditPropertiesModalComponent } from 'src/app/shared/edit-properties-modal/edit-properties-modal.component';
import { AddMetadataTemplateModalComponent } from 'src/app/shared/add-metadata-template-modal/add-metadata-template-modal.component';

@Component({
  selector: 'app-folder-detail-right-side-panel',
  templateUrl: './folder-detail-right-side-panel.component.html',
  styleUrls: ['./folder-detail-right-side-panel.component.scss']
})
export class FolderDetailRightSidePanelComponent implements OnInit {
  @Output() hamburger = new EventEmitter();
  panelOpenState = false;
  constructor(public dialog: MatDialog) {}
  


  openEditPropertiesDialog() {
    const dialogRef = this.dialog.open(EditPropertiesModalComponent,{panelClass: 'full-screen-dialog'});
  }
  openAddMetadataTemplateDialog() {
    const dialogRef = this.dialog.open(AddMetadataTemplateModalComponent,{panelClass: 'full-screen-dialog'});
  }


  ngOnInit(): void {
  }

}
