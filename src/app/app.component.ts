import { Component, ViewChild } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { MatTableDataSource } from "@angular/material/table";
import { MatTableModule } from "@angular/material/table";
import { EmployeeService } from './service/employee.service';
import { EmployeeDataSource } from './model/employee-table-datasource';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  dataSource !: EmployeeDataSource;
  
  columnsToDisplay = ['name', 'gender', 'email', 'department', 'company', 'date'];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(data => {
        this.dataSource = new EmployeeDataSource(data);  
      });
  }

}

// "name": "Rosalinda Racine",
//       "gender": "Genderfluid",
//       "email": "rracine0@lulu.com",
//       "department": "Legal",
//       "company": "Meevee",
//       "date": "11-Apr-2023"