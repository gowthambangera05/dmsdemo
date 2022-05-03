import { Component, OnInit } from '@angular/core';
interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-card-view-template',
  templateUrl: './card-view-template.component.html',
  styleUrls: ['./card-view-template.component.scss']
})
export class CardViewTemplateComponent implements OnInit {
  isListView:boolean = true;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  sortvalue: value[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'last-modified', viewValue: 'Last Modified'},
    {value: 'repository', viewValue: 'Repository'},
    {value: 'folder', viewValue: 'Folder'},
  ];

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
