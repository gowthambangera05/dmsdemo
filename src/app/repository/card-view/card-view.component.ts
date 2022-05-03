import { Component, OnInit } from '@angular/core';
/**
 * @title Configurable checkbox
 */
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor() {
    
   }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
