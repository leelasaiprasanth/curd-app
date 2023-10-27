import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeData } from './models/employee-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Curd App';
  public EmployeeData: any;
  userData = new MatTableDataSource<EmployeeData>();
  public constructor(private http: HttpClient) {}
  public ngOnInit(): void {
    const url: string = '/assets/EmployeeData.json';
    this.http.get(url).subscribe((response) => {
      console.log('Raw Data received', response);
      this.EmployeeData = response;
      this.userData.data = this.EmployeeData;
      this.userData.paginator = this.paginator;
    });
    console.log('Data source', this.userData.data);
  }
  public ngOnDestroy() {}

  displayedColumns: string[] = [
    'name',
    'gender',
    'email',
    'department',
    'company',
    'date',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
}
