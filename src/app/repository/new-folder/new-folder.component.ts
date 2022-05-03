import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.scss']
})
export class NewFolderComponent implements OnInit {
  toppings = new FormControl();
  sortvalue: value[] = [
    {value: 'steak-0', viewValue: 'Select'},
    {value: 'pizza-1', viewValue: 'One'},
    {value: 'tacos-2', viewValue: 'Two'},
  ];
  folderColor: value[] = [
    {value: 'Gold', viewValue: 'Gold'},
    {value: 'Red', viewValue: 'Red'},
    {value: 'Blue', viewValue: 'Blue'},
    {value: 'Green', viewValue: 'Green'},
  ];

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
