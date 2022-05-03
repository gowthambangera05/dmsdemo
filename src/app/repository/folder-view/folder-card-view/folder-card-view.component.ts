import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder-card-view',
  templateUrl: './folder-card-view.component.html',
  styleUrls: ['./folder-card-view.component.scss']
})
export class FolderCardViewComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
