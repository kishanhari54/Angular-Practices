import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ContentChild,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'rs-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() HeaderColumns: headerColumn[];
  @Input() Data: [];
  @ContentChild('header') header: TemplateRef<any>;
  @ContentChild('body') body: TemplateRef<any>;
  cxt = {};
  constructor() {
    console.log('Table Comp Const');
  }
  ngOnInit() {
    console.log('Table On Init');
    this.cxt = { cols: this.HeaderColumns, data: this.Data };
  }
  ngAfterViewInit() {
    console.log('Table After View Init');
  }
}

interface headerColumn {
  key: string;
  description: string;
}
