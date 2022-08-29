import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordianComponent } from '../Reusable/Accordian/accordian.component';
@NgModule({
  imports:      [ CommonModule],
  declarations: [ AccordianComponent ],
  exports:[AccordianComponent]
})
export class ReusableModule { }
