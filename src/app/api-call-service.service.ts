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

  getCountry(): Observable<Country[]> {
    return this.httpclient.get<Country[]>(
      'https://api.countrystatecity.in/v1/countries',
      {
        headers: this.httpOptions.headers,
      }
    );
  }
  getStateOfSelectedCountry(countryIso: string): Observable<any> {
    return this.httpclient.get(
      `https://api.countrystatecity.in/v1/countries/${countryIso}/states`,
      { headers: this.httpOptions.headers }
    );
  }

  getCitiesOfSelectedState(countryIso: any, stateIso: any): Observable<any> {
    return this.httpclient.get(
      `https://api.countrystatecity.in/v1/countries/${countryIso}/states/${stateIso}/cities`,
      { headers: this.httpOptions.headers }
    );
  }
}
