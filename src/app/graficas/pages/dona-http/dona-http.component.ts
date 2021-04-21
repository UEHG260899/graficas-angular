import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public colors: Color[] = [
    {
      backgroundColor: [
        '#2AA0F5',
        '#0BCAD4',
        '#00EA9A',
        '#1AD649'
      ]
    }
  ]

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100, 150],
  ];
  public doughnutChartType: ChartType = 'doughnut';


  constructor(private graficaService: GraficasService) { }

  ngOnInit(): void {
    this.graficaService.getUsuariosDona()
        .subscribe( ({ labels, values}) => {
          this.doughnutChartLabels = labels;
          this.doughnutChartData.push(values);
        });
  }

}
