import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
