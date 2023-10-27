// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';

// import { MatTableModule } from '@angular/material/table';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';

// import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [
//     BrowserModule,
//     MatFormFieldModule,
//     MatTableModule,
//     MatPaginatorModule,
//     MatSortModule,
//     HttpClientModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// Httpclient 
import { HttpClientModule } from '@angular/common/http';

// Material UI
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, MatSlideToggleModule, BrowserAnimationsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
