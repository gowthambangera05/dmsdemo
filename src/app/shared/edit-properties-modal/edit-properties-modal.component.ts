import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-edit-properties-modal',
  templateUrl: './edit-properties-modal.component.html',
  styleUrls: ['./edit-properties-modal.component.scss']
})
export class EditPropertiesModalComponent implements OnInit {
  selected = new FormControl('Scanning');
  selected2 = new FormControl('Private');
 
  constructor() { }

  ngOnInit(): void {
  }

}
