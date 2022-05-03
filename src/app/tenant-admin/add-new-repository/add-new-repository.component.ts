import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-new-repository',
  templateUrl: './add-new-repository.component.html',
  styleUrls: ['./add-new-repository.component.scss']
})
export class AddNewRepositoryComponent implements OnInit {
 
  sortvalue: value[] = [
    {value: 'steak-0', viewValue: 'Select'},
    {value: 'pizza-1', viewValue: 'One'},
    {value: 'tacos-2', viewValue: 'Two'},
  ];
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    window.scroll(0, 0);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
