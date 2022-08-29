import { Component, Input } from '@angular/core';

@Component({
  selector: 'rs-dropdown',
  templateUrl: './dropdown.component.html',
  styles: [
    '.dropdownContainer{ width:300px} select{ width:100%} option{ padding:1em ; font-weight:bold} ',
  ],
})
export class Dropdown {
  @Input('data') dropdownData: dropdownDataModel[];

  ngOnInit() {}
}

interface dropdownDataModel {
  value: string;
  description: string;
}
