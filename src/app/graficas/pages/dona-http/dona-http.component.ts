import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  constructor( private graficaService: GraficasService) { }

  ngOnInit(): void {
    // this.graficaService.getUsuariosSocialMedia()
    //   .subscribe( data => {
        
    //     const labels = Object.keys(data);
    //     const values = Object.values(data);

    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push(values);
    //   });

    this.graficaService.getUsersSocialMediaData()
      .subscribe( ({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
  }

   // Doughnut
   public doughnutChartLabels: Label[] = [ 
      // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' 
    ];
   public doughnutChartData: MultiDataSet = [
      //  [ 350, 450, 100, 150] ,
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
