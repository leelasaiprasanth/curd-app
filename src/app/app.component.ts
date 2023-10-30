import { AfterViewInit, Component, ViewChild } from '@angular/core';

// import { HttpClient } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material/table';
// import { MatTableModule } from '@angular/material/table';
import { EmployeeService } from './service/employee.service';
// import { EmployeeDataSource } from './model/employee-table-datasource';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Employee } from './model/employee.interface';

// import { MatFormField } from '@angular/material/form-field';
// import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
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
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      // this.dataSource.filter = this.filter;
    });
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.dataSource = new MatTableDataSource(this.data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
