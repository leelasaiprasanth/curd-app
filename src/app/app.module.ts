import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatTableModule, HttpClientModule, MatPaginatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
