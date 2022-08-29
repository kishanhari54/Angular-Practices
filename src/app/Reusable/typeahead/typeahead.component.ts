import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'rs-typeahead',
  templateUrl: './typeahead.component.html',
  styles: [
    `
    ul { padding:0 ; margin:0 ;width:100%; list-style:none;box-shadow: 13px 13px 26px #d9d9d9, -13px -13px 26px #f5f5f5; z-index:1000}
    li { padding:0.5em; border-bottom: 2px solid red ; width:100% ; text-transform: capitalize } 
    li:hover{ background: rgb(207, 124, 124); color: white ; cursor: pointer}
    .typeaheadContainer{
      max-width:300px;
    }
    input{ width:100% ; padding: 0.5em;outline:none }
    `,
  ],
})
export class TypeAhead implements OnInit {
  results = [];
  constructor() {}
  latency = 10000;
  ngOnInit() {
    fromEvent(document.querySelector('input'), 'keyup')
      .pipe(debounceTime(500))
      .subscribe((e: any) => {
        let data = e.target.value;
        setTimeout(() => {
          this.results = [];
          this.fetchResults(data).then((results) =>
            results.forEach((data) => this.results.push(data.word))
          );
        }, this.latency);
        this.latency = 0;
      });
  }

  fetchResults(val): Promise<any[]> {
    return fetch(`https://api.datamuse.com/words?sl=${val}&max=5`).then((d) =>
      d.json()
    );
  }
}
