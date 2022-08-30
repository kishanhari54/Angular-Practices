import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'rs-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {}
  @Input() HeaderColumns: headerColumn[];
  @Input() Data: [];
  @ContentChild('header') header: TemplateRef<any>;
  @ContentChild('body') body: TemplateRef<any>;
  cxt = {};
  ngOnInit() {
    this.cxt = { cols: this.HeaderColumns, data: this.Data };
  }
}

interface headerColumn {
  key: string;
  description: string;
}
