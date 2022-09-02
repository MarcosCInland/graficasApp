import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartData: ChartData<'bar'> = {
    labels: [ '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' },
      { data: [ 18, 50, 40, 49, 36, 45, 70 ], label: 'Series C' }
    ]
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      /*datalabels: {
        anchor: 'end',
        align: 'end'
      }*/
    }
  };
  public barChartType: ChartType = 'bar';
  
  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),  //1
      59,                               //2
      80,                               //3
      Math.round(Math.random() * 100),  //4
      56,                               //5
      Math.round(Math.random() * 100),  //6
      40 
    ];                             //7
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),  //1
      59,                               //2
      80,                               //3
      Math.round(Math.random() * 100),  //4
      56,                               //5
      Math.round(Math.random() * 100),  //6
      40 
    ];   
    this.chart?.update();
  }

}
