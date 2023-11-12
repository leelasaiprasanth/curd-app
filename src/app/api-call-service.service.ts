import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root',
})
export class ApiCallServiceService {
  constructor(private httpclient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'X-CSCAPI-KEY':
        'QUdJbmdGdlVpRTdtMVRad1pJTjJMT1BoTGZiZkZndVpzTjdkSUxuSw==',
    }),
  };

  getCountry(): Observable<any> {
    return this.httpclient.get('https://api.countrystatecity.in/v1/countries', {
      headers: this.httpOptions.headers,
    });
  }
}
