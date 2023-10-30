import { Component, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { EmployeeService } from './service/employee.service';
import { EmployeeDataSource } from './model/employee-table-datasource';
import { MatPaginator } from '@angular/material/paginator';
import { Employee } from './model/employee.interface';
import { MatSort } from '@angular/material/sort';
// import { MatTableFilter } from 'mat-table-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Curd-Application';

  dataSource!: MatTableDataSource<Employee>;

  columnsToDisplay = [
    'name',
    'gender',
    'email',
    'department',
    'company',
    'date',
  ];
  data!: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // this.dataSource.filter = this.filter;
    });
  }

  @ViewChild('paginator')
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource = new MatTableDataSource(this.data);
  }

  @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild(MatTableFilter) filter!: MatTableFilter;
}
