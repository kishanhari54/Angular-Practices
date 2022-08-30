import { Component , OnInit, AfterViewInit , AfterContentInit} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  dropdownData = [
    { value: '123', description: 'Hari' },
    { value: '153', description: 'Sunil' },
  ];

  customTable = {
    HeaderColumns: ([] = [
      { key: 'id', description: 'ID' },
      { key: 'name', description: 'Name' },
    ]),
    Data: [
      { id: '1', name: 'Hari' },
      { id: '2', name: 'Test' },
      { id: '3', name: 'Quote' },
      { id: '4', name: 'Fami' },
    ],
  };
  constructor(){
    console.log('App Comp Const');
  }

  ngOnInit(){
    console.log('App - Ng On Init');
  }
  ngAfterViewInit(){
    console.log('App Ng After View')
  }
  ngAfterContentInit(){
    console.log('App NG Content Init')
  }

  edit(tablerowData) {
    console.log(tablerowData);
    this.customTable.Data.splice(
      this.customTable.Data.findIndex((d) => d.id == tablerowData.id),
      1
    );
  }
}
