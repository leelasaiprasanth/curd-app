import { DataSource } from '@angular/cdk/table';
import { Employee } from './employee.interface';
import { Observable, of } from 'rxjs';

export class EmployeeDataSource extends DataSource<Employee> {
  constructor(private employeeData: Employee[]) {
    super();
  }

  connect(): Observable<Employee[]>  {
    return of(this.employeeData); 
  }

  disconnect() {}
}
