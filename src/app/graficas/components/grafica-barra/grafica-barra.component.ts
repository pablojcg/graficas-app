import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true
  };

  @Input() public barChartLabels: Label[] = [/*'2020','2021','2022','2023','2024','2025','2026'*/];
  
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() public barChartData: ChartDataSets[] = [/*
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#954FE8', hoverBackgroundColor: 'red' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#4F5CE8', hoverBackgroundColor: 'red' },
      { data: [ 18, 28, 30, 59, 46, 17, 50 ], label: 'Series C', backgroundColor: '#5792FF', hoverBackgroundColor: 'red' }
*/];

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal) this.barChartType = 'horizontalBar';
  }

}
