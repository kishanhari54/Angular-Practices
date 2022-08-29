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
}
