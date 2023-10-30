import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  public url: string = '/assets/employeeData.json';

  getEmployees() {
    return this.http.get<Employee[]>(this.url);
  }
}
