import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSortModule, HttpClientModule],  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
