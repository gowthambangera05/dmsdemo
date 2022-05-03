import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
interface value {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-repository-properties-modal',
  templateUrl: './edit-repository-properties-modal.component.html',
  styleUrls: ['./edit-repository-properties-modal.component.scss']
})
export class EditRepositoryPropertiesModalComponent implements OnInit {
  selected = new FormControl('Scanning');
  selected2 = new FormControl('Private');
 
  myControl = new FormControl();
  options: string[] = ['Jone Jose', 'Jason@gmail.com', 'Thomas'];
  filteredOptions: Observable<string[]>;
  constructor() { }
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


}
