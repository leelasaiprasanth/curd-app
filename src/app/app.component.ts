// import { Component } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DataService } from './data.service';

// export interface amazonSales {
//   id: string;
//   name: string;
//   progress: string;
//   fruit: string;
// }

/** Constants used to fill up our data base. */
// const FRUITS: string[] = [
//   'blueberry',
//   'lychee',
//   'kiwi',
//   'mango',
//   'peach',
//   'lime',
//   'pomegranate',
//   'pineapple',
// ];
// const NAMES: string[] = [
//   'Maia',
//   'Asher',
//   'Olivia',
//   'Atticus',
//   'Amelia',
//   'Jack',
//   'Charlotte',
//   'Theodore',
//   'Isla',
//   'Oliver',
//   'Isabella',
//   'Jasper',
//   'Cora',
//   'Levi',
//   'Violet',
//   'Arthur',
//   'Mia',
//   'Thomas',
//   'Elizabeth',
// ];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'curd-app';
  data: Array<any> = []
  constructor(private dataService: DataService) {
    // data
    this.dataService.getJsondata().subscribe((res: any)=>{
        // alert(JSON.stringify(res))
        this.data = res;
        console.log(res);
    });
  }

  displayedColumns: string[] = this.data;
}

    // "customer_id": 29654192,
    // "name": "Eden Vidler",
    // "gender": "Genderqueer",
    // "age": 73,
    // "email": "evidler0@ask.com",
    // "order_date": "7/9/2023",
    // "order_id": 309490898538,
    // "quantity": 24,
    // "product_id": 104681272,
    // "unit_price": 967.96,
    // "total_price": 8225.61,
    // "payment_method": "PayPal",
    // "shipping_address": "57 Spohn Court",
    // "delivery_status": "out for delivery"

// export class AppComponent implements AfterViewInit {
//   title = 'curd-app';
//   displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
//   dataSource: MatTableDataSource<amazonSales>;

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor() {
//     // Create 100 users
//     const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

//     // Assign the data to the data source for the table to render
//     this.dataSource = new MatTableDataSource(users);
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }

/** Builds and returns a new User. */
// function createNewUser(id: number): amazonSales {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
