import { AfterViewInit, Component, ViewChild } from '@angular/core';

// import { HttpClient } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material/table';
// import { MatTableModule } from '@angular/material/table';
import { EmployeeService } from './service/employee.service';
// import { EmployeeDataSource } from './model/employee-table-datasource';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Employee } from './model/employee.interface';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

// import { MatFormField } from '@angular/material/form-field';
// import { MatInput } from '@angular/material/input';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'Curd-Application';

  dataSource!: MatTableDataSource<Employee>;
  selectedStartDate: Date | null = null;
  selectedEndDate: Date | null = null;

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

  applyDateRangeFilter() {
    if (this.selectedStartDate && this.selectedEndDate) {
      const filteredData = this.data.filter((employee) => {
        const date = this.formatDate(employee.date);
        return date >= this.selectedStartDate! && date <= this.selectedEndDate!;
      });

      this.dataSource.data = filteredData;
    } else {
      // If no date range is selected, show all data
      this.dataSource.data = this.data;
    }

    // Reapply sorting and pagination
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  formatDate(dateString: string): Date {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const day = +parts[0];
      const month = this.getMonthNumber(parts[1]);
      const year = +parts[2];
      return new Date(year, month - 1, day);
    }
    return new Date(); // Return a default date in case of invalid format
  }

  getMonthNumber(monthName: string): number {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return months.indexOf(monthName) + 1;
  }

  // Handler for date range picker selection
  dateRangeSelected(
    type: 'start' | 'end',
    event: MatDatepickerInputEvent<Date>
  ) {
    const value = event.value;
    if (type === 'start') {
      this.selectedStartDate = value;
    } else if (type === 'end') {
      this.selectedEndDate = value;
    }
  }

  generatePDF() {
    const doc = new jsPDF();

    // Capture the MatTable HTML content using html2canvas
    const element = document.getElementById('tableToExport');

    if (element) {
      // Check if the element exists
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        // Add the captured HTML content as an image to the PDF
        doc.addImage(imgData, 'PNG', 10, 10, 190, 0);
        doc.save('table.pdf');
      });
    }
  }
}
