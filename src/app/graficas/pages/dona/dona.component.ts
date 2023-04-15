import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Doughnut
  public doughnutChartLabels: Label[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' ];
  public doughnutChartData: MultiDataSet = [
      [ 350, 450, 100, 150] ,
      // [ 50, 150, 120 ] ,
      // [ 250, 130, 70 ] 
    ];
    
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#2D91EB',
        '#0BA3BD',
        '#36E0BF',
        '#2FF788',
        '#2DEB3E'
      ]
    }
  ];

}
