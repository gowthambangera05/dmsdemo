import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { MatMenuTrigger } from '@angular/material/menu';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
export interface PeriodicElement {

  position: number;

  RepositoryName: string;
  Security: string;
  DateModified: string;
  ModifiedBy: string;
  gridListNav: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,  RepositoryName: 'Repository 1', Security: "Private", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
  {position: 2,  RepositoryName: 'Repository 2', Security: "Public", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam Jone', gridListNav:'gg'},
  {position: 3, RepositoryName: 'Repository 3', Security: " Private", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam ', gridListNav:'gg'},
  {position: 4,  RepositoryName: 'Repository 4', Security: "Private ", DateModified: '01/06/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
  {position: 5,  RepositoryName: 'Repository 5', Security: "Private ", DateModified: '01/06/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
  {position: 6, RepositoryName: 'Repository 6', Security: "Private", DateModified: '01/04/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
  {position: 7,  RepositoryName: 'Repository 7', Security: "Public", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
  {position: 8,  RepositoryName: 'Repository 8', Security: "Public ", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},
  {position: 9,  RepositoryName: 'Repository 9', Security: "Public", DateModified: '01/03/2022 3:30 PM', ModifiedBy: 'Jone Adam', gridListNav:'gg'},

];

@Component({
  selector: 'app-manage-repository',
  templateUrl: './manage-repository.component.html',
  styleUrls: ['./manage-repository.component.scss']
})
export class ManageRepositoryComponent implements OnInit {

  displayedColumns: string[] = [ 'RepositoryName', 'Security', 'DateModified', 'ModifiedBy',];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clickedRows = new Set<PeriodicElement>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;




  @ViewChild(MatMenuTrigger, { static: true }) contextMenu!: MatMenuTrigger;
 

   constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
  announceSortChange(sortState: Sort) {
  
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
