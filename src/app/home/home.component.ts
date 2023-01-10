import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  order: string;
  resultGame:any;
  options: any;
  grafic1=[];
  grafic2=[];
  grafic3=[];
  titulo1=[];
  data=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
        this.GetInfo();
  }

  queryInfo(){
    return this.http.get('http://localhost:8000/api/queryGames');
  };

  GetInfo(){
    this.queryInfo().subscribe((result)=>{
        console.log('Data Games Info: ', result);
        this.resultGame=result;
        this.grfica(this.resultGame.filters);
    });
  };

  grfica(val){
    this.grafic1=val.years[0].years;
    this.grafic2=val.years[1].years;
    this.grafic3=val.years[2].years;

    console.log('grafias', this.grafic1);

    for (let i = 0; i < this.grafic1.length; i++) {
        this.titulo1.push(this.grafic1[i].year);
        this.data.push(this.grafic1[i].count);
    }
    for (let i = 0; i < this.grafic2.length; i++) {
      this.titulo1.push(this.grafic2[i].year);
      this.data.push(this.grafic2[i].count);
    }
    for (let i = 0; i < this.grafic2.length; i++) {
      this.titulo1.push(this.grafic3[i].year);
      this.data.push(this.grafic3[i].count);
    }
    console.log('titulos',this.titulo1);
    console.log('data',this.data);


    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        axisLabel: {
          color: '#fff',
        },
        data: this.titulo1,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        axisLabel: {
          color: '#fff',
        },
      },
      series: [
        {
          itemStyle: {
            color: '#99FF33'
          },
          name: 'bar',
          type: 'bar',
          data: this.data,
          animationDelay: (idx) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  };
}
