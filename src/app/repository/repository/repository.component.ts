import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoveCopyModalComponent } from 'src/app/shared/move-copy-modal/move-copy-modal.component';
import { UploadFileModalComponent } from '../upload-file-modal/upload-file-modal.component';
interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  isListView:boolean = true;

  sortvalue: value[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'last-modified', viewValue: 'Last Modified'},
  ];

  isFavorite: boolean = true;

  favorite() {
    this.isFavorite = this.isFavorite ? false : true;
  }

  navigateToNewFolder() {
  }
  constructor(public dialog: MatDialog) {}
  
  openUploadFileDialog() {
    const dialogRef = this.dialog.open(UploadFileModalComponent,{panelClass: 'full-screen-dialog'});
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
  openMoveCopyDialog() {
    const dialogRef = this.dialog.open(MoveCopyModalComponent, {panelClass: 'custon-width-md'});
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
