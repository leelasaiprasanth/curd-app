import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from './country';
import { ApiCallServiceService } from './api-call-service.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { State } from './state';
import { City } from './city';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Currated Application';

  listCountries!: Country[];
  countrySelected!: string;
  listState!: State[];
  selectedState!: string;
  listCity!: City[];

  constructor(private apiCallServiceService: ApiCallServiceService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.fetchCountry();
  }
  dataSource: any;
  fetchCountry() {
    this.apiCallServiceService.getCountry().subscribe((data) => {
      this.listCountries = data;
      this.dataSource = new MatTableDataSource(this.listCountries);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log('list of Countries', this.listCountries);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayedColumns: string[] = ['id', 'name', 'iso2'];
  // dataSource = ELEMENT_DATA;

  onCountrySelected(countryIso: any) {
    this.apiCallServiceService
      .getStateOfSelectedCountry(countryIso)
      .subscribe((data) => {
        this.listState = data;
        console.log('States Retrieved', this.listState);
      });
  }
  onStateSelected(
    countryparam = this.countrySelected,
    stateparam = this.selectedState
  ) {
    this.apiCallServiceService
      .getCitiesOfSelectedState(countryparam, stateparam)
      .subscribe((data) => {
        this.listCity = data;
        console.log('Cities retrieved', this.listCity);
      });
  }
}
