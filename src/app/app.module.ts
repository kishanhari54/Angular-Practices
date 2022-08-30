import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReusableModule } from './Reusable/resuable.module';
import { RxjsService } from './Rxjs/rxjs.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, ReusableModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  providers: [RxjsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
