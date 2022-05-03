import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isListView:boolean = true;

  sortvalue: value[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'last-modified', viewValue: 'Last Modified'},
    {value: 'repository', viewValue: 'Repository'},
    {value: 'folder', viewValue: 'Folder'},
  ];

 

  navigateToNewFolder() {
    
  }
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
