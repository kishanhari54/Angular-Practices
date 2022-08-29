import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'rs-accord',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.style.css'],
})
export class AccordianComponent {
  name = 'Angular';
  @Input() ContentData: any;
  @ContentChild('title', { read: TemplateRef }) title: TemplateRef<any>;
  @ContentChild('content', { read: TemplateRef }) content: TemplateRef<any>;

  expand: boolean = false;
  ngOnInit() {
    console.log(this.ContentData);
  }

  toggler() {
    this.expand = !this.expand;
  }
}
