import {LiveAnnouncer} from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {

  position: number;
  img: string;
  name: string;
  folder: string;
  DateModified: string;
  ModifiedBy: string;
  gridListNav: string;
  folderColor: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, img: '', name: 'folder 1', folder: "", folderColor: "",  DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
    {position: 2, img: '', name: 'folder 2', folder: "", folderColor: "green", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam Jone', gridListNav:'gg'},
    {position: 3, img: '', name: 'folder 3', folder: " ", folderColor: "", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam ', gridListNav:'gg'},
    {position: 4, img: 'assets/images/icon-pdf.svg', name: 'file 1', folderColor: "", folder: "Folder 1", DateModified: '01/06/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
    {position: 5, img: 'assets/images/icon-doc.svg', name: 'file 2', folderColor: "", folder: "Folder 2", DateModified: '01/06/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
    {position: 6, img: 'assets/images/icon-xls.svg', name: 'file 3', folderColor: "", folder: "Folder 3", DateModified: '01/04/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
    {position: 7, img: 'assets/images/icon-pdf.svg', name: 'file 4', folderColor: "", folder: "Folder 4", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
    {position: 8, img: 'assets/images/icon-doc.svg', name: 'file 5', folderColor: "", folder: "Folder 5", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
    {position: 9, img: 'assets/images/icon-xls.svg', name: 'file 6', folderColor: "", folder: "Folder 6", DateModified: '01/03/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},

];

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
  
})

export class ListViewComponent implements OnInit {
  
  displayedColumns: string[] = ['checkbox','img', 'name', 'folder', 'DateModified', 'ModifiedBy','gridListNav'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clickedRows = new Set<PeriodicElement>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  contextMenuPosition = { x: '0px', y: '0px' };

  @ViewChild(MatMenuTrigger, { static: true }) contextMenu!: MatMenuTrigger;
  selectedPosition: number = 0;
  onContextMenu(event: MouseEvent, row: any) {
    console.log('onContextMenu '+row.position);
    this.selectedPosition=row.position;
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.openMenu();
  }
  selctedMenuPosition(element: any){
    // console.log('selectedmenuposition '+element.position);
    this.selectedPosition=element.position;
  }

   constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    // this.dataSource.sort = this.sort;
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
  
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}

