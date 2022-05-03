import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder-vew-file-details',
  templateUrl: './folder-vew-file-details.component.html',
  styleUrls: ['./folder-vew-file-details.component.scss']
})
export class FolderVewFileDetailsComponent implements OnInit {
  isShowDiv = false;  
  mobileView = false;
  
  panelOpenState = false;
  constructor() { }
  isFavorite: boolean = true;

  favorite() {
    this.isFavorite = this.isFavorite ? false : true;
  }

  ngOnInit() {
    window.onresize = () => this.mobileView = window.innerWidth <= 576;
    this.mobileView = true;
    window.scroll(0, 0);
    
  }
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  }

}
