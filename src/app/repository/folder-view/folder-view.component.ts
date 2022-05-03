
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UploadFileModalComponent } from '../upload-file-modal/upload-file-modal.component';
interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.scss']
})
export class FolderViewComponent implements OnInit {
  isListView:boolean = true;

  sortvalue: value[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'last-modified', viewValue: 'Last Modified'},
    {value: 'repository', viewValue: 'Repository'},
    {value: 'folder', viewValue: 'Folder'},
  ];
 
  constructor(public dialog: MatDialog) {}
  isFavorite: boolean = true;
 

  openUploadFileDialog() {
    const dialogRef = this.dialog.open(UploadFileModalComponent,{panelClass: 'full-screen-dialog'});
  }

  favorite() {
    this.isFavorite = this.isFavorite ? false : true;
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
