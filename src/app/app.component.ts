// import { Component } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Birth, DataService } from './data.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpErrorResponse } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'curd-app';
  // data: Array<any> = []
  dataSource = new MatTableDataSource<Birth>();

  displayedColumns: string[] = ['id', 'name', 'gender', 'date'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private dataService: DataService) {
  //   this.dataService.getItems().subscribe((res: any)=>{
  //     // alert(JSON.stringify(res))
  //     // this.data = res;
  //     console.log(res);
  // });
  }

  ngOnInit() {
    this.dataService.getItems().subscribe((data) => {
      this.dataSource.data = data;
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    });
    (error: HttpErrorResponse) => {
      console.error(error);  
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
