import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordianComponent } from '../Reusable/Accordian/accordian.component';
import { Dropdown } from '../Reusable/dropdown/dropdown.component';
import { TableComponent } from '../Reusable/table/table/table.component';
import { TypeAhead } from '../Reusable/typeahead/typeahead.component';
@NgModule({
  imports:      [ CommonModule],
  declarations: [ AccordianComponent ,Dropdown,TypeAhead,TableComponent],
  exports:[AccordianComponent,Dropdown,TypeAhead,TableComponent]
})
export class ReusableModule { }
