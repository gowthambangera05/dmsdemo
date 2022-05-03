import {LiveAnnouncer} from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {

  position: number;
  img: string;
  name: string;
  folder: string;
  DateModified: string;
  Repository:string;
  ModifiedBy: string;
  gridListNav: string;
  folderColor: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, img: '', name: 'folder 1',folderColor: "", folder: "",Repository:"Repo A", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
  {position: 2, img: '', name: 'folder 2',folderColor: "", folder: "", Repository:"Repo B", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam Jone', gridListNav:'gg'},
  {position: 3, img: '', name: 'folder 3',folderColor: "red", folder: " ",Repository:"Repo C", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam ', gridListNav:'gg'},
  {position: 4, img: 'assets/images/icon-pdf.svg', name: 'file 1', folder: "Folder 1",folderColor: "", Repository:"Repo D", DateModified: '01/06/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
  {position: 5, img: 'assets/images/icon-doc.svg', name: 'file 2', folder: "Folder 2",folderColor: "", Repository:"Repo E", DateModified: '01/06/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
  {position: 6, img: 'assets/images/icon-xls.svg', name: 'file 3', folder: "Folder 3",folderColor: "", Repository:"Repo F", DateModified: '01/04/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
  {position: 7, img: 'assets/images/icon-pdf.svg', name: 'file 4', folder: "Folder 4",folderColor: "", Repository:"Repo A", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
  {position: 8, img: 'assets/images/icon-doc.svg', name: 'file 5', folder: "Folder 5",folderColor: "", Repository:"Repo C", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
  {position: 9, img: 'assets/images/icon-xls.svg', name: 'file 6', folder: "Folder 6",folderColor: "", Repository:"Repo D", DateModified: '01/03/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},

];


@Component({
  selector: 'app-search-list-view',
  templateUrl: './search-list-view.component.html',
  styleUrls: ['./search-list-view.component.scss']
})
export class SearchListViewComponent implements OnInit {

  displayedColumns: string[] = ['checkbox','img', 'name', 'folder', 'Repository','DateModified', 'ModifiedBy','gridListNav'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clickedRows = new Set<PeriodicElement>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
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
    this.selectedPosition=element.position;
  }

   constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }
  announceSortChange(sortState: Sort) {
  
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
