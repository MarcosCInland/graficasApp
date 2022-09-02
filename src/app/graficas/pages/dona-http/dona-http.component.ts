import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  /*public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }
    ]
  };*/
  public doughnutChartType  : ChartType = 'doughnut';
  public doughnutChartLabels: string[] = [];
  public doughnutChartData  !: ChartData<'doughnut'>;

  loadingItems: boolean = false;
  
  constructor( private graficaService: GraficasService ) { }

  ngOnInit(): void {
    this.loadingItems = true;
    this.graficaService.getUsuariosRedesSociales()
    .subscribe(info =>{
      //Llaves
      const labels = Object.keys(info);
      //Valores
      const values: number[] = Object.values(info);
      //Create structure for doughnut chart
      this.doughnutChartLabels = labels;
      this.doughnutChartData = {
        labels,
        datasets: [
          { data: values }
        ]
      }
      this.loadingItems = false;
    }, fail =>{console.log(fail)});
    
  }

}
