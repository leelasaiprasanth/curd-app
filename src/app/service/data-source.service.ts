import { Injectable } from '@angular/core';

// HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataSourceService {
  public constructor(private http: HttpClient) {}
  dataSource = {};
}
