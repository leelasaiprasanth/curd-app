import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-chart-popup',
  templateUrl: './chart-popup.component.html',
  styleUrls: ['./chart-popup.component.css']
})
export class ChartPopupComponent {

  chartOptions: any;
  @Input() categories: string[];
  series: any[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any[]) {

    this.categories = data.map(item => item.name);

    this.series = [
      {
        name: 'Employees',
        data: data.map(item => item.gender)
      } 
    ];

    this.chartOptions = {
      chart: { type: 'bar' },
      xaxis: { categories: this.categories }
    }

  }

}