import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeData } from './models/employee-data';
import { DataSourceService } from './service/data-source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Curd App';

  public EmployeeData: any;
  public dataSource: any;

  public constructor(private http: HttpClient) {}

  public ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    const url: string = '/assets/EmployeeData.json';
    this.http.get(url).subscribe((response) => {
      this.EmployeeData = response;

      console.log('Raw Data received', this.EmployeeData);

      this.dataSource = new MatTableDataSource(this.EmployeeData);
      this.dataSource.paginator = this.paginator;

      console.log('Data source', this.dataSource.data);
    });
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
