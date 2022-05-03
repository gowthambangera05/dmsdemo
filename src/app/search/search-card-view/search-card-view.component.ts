import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-card-view',
  templateUrl: './search-card-view.component.html',
  styleUrls: ['./search-card-view.component.scss']
})
export class SearchCardViewComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
