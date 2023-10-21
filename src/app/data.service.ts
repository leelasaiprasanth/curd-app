import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

export interface Birth {
  id: number;
  name: string;
  price: number;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<Birth[]> {
    console.log('Get items called');
    return this.http.get<Birth[]>('assets/data.json').pipe(
      tap((data) => {
        console.log('Items retrieved', data);
      })
    );
  }
}
