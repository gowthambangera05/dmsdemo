import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditMetadataTemplateModalComponent } from 'src/app/shared/edit-metadata-template-modal/edit-metadata-template-modal.component';

@Component({
  selector: 'app-metadata-template',
  templateUrl: './metadata-template.component.html',
  styleUrls: ['./metadata-template.component.scss']
})
export class MetadataTemplateComponent implements OnInit {
  defaultCheck = false;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openEditMetadataTemplate() {
    const dialogRef = this.dialog.open(EditMetadataTemplateModalComponent,{panelClass: 'full-screen-dialog'});

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
