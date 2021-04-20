import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  

  @Input() orientacion: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  @Input() barChartLabels: Label[] = [
    //'2020', '2021', '2022', '2023', '2024', '2026', '2026'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  @Input() barChartData: ChartDataSets[] = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#FFEBA1', hoverBackgroundColor: '#FFEBA1' },
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#E8AE8E', hoverBackgroundColor: '#E8AE8E' },
    //{ data: [8, 18, 90, 59, 26, 37, 56], label: 'Series C', backgroundColor: '#FFA8D8', hoverBackgroundColor: '#FFA8D8' },
  ];

  ngOnInit(): void {
    if(this.orientacion){
      this.barChartType = 'horizontalBar'
    }
  }

}
