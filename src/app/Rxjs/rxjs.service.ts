import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { retry, tap, map } from 'rxjs/operators';
import { AppModule } from '../app.module';

@Injectable()
export class RxjsService {
  constructor(private http: HttpClient) {}
  c = 1;
  delayedObs(delay): Observable<any> {
    /*  if (this.c == 1) { this.c =2;
      return throwError(() => {
        return 'err';
      });
    } */
    return from(
      fetch(
        `https://deelay.me/${delay}/https://dog.ceo/api/breeds/list/all
      `
      ).then((res) => res.json())
    );
  }
  getPic() {
   return this.delayedObs('5000').pipe(
      tap((data) => console.log('tap' + data)),
      // retry(1),
      map((data) => {
        console.log(data);
        return data.message;
      })
    )
   // .subscribe((d) => console.log(d));
  }
}
