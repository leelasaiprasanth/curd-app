import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Curd App';
  public userInfo: any;
  public constructor(private http: HttpClient) {}
  public ngOnInit(): void {
    const url: string = '/assets/EmployeeData.json';
    this.http.get(url).subscribe((response) => {
      this.userInfo = response;
    });
  }
}
