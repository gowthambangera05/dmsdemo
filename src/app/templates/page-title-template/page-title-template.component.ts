import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title-template',
  templateUrl: './page-title-template.component.html',
  styleUrls: ['./page-title-template.component.scss']
})
export class PageTitleTemplateComponent implements OnInit {

  isFavorite: boolean = true;

  favorite() {
    this.isFavorite = this.isFavorite ? false : true;
  }

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
