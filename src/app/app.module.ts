import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChartPopupComponent } from './chart-popup/chart-popup.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatTableFilterModule } from 'mat-table-filter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxApexchartsModule } from 'ngx-apexcharts';

@NgModule({
  declarations: [AppComponent, ChartPopupComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    NgxApexchartsModule,
    // MatTableFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
