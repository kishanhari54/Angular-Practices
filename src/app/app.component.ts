import { Component } from '@angular/core';

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

  edit(tablerowData) {
    console.log(tablerowData);
  }
}
