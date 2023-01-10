import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {

  order: string;
  resultGame:any;
  titulo=[];
  data=[];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        this.order = params.filter;
        console.log(this.order); // popular
      }
    );
        this.GetInfo();

        // for (let i = 0; i < this.resultGame.ratings.length; i++) {
        //   dataShadow.push(yMax);
        // }
  }

  queryInfo(val){
    console.log('query', this.order);
    return this.http.get('http://localhost:8000/api/queryOne',{
      params:{
        val
      }
    });
  }

  GetInfo(){
    this.queryInfo(this.order).subscribe((result)=>{
        console.log('Data Games Info: ', result);
        this.resultGame=result;

        this.grfica(this.resultGame.ratings);


    });
  }

  grfica(val){
    for (let i = 0; i < val.length; i++) {
        this.titulo.push(val[i].title);
        this.data.push(val[i].count);
    }
    console.log('titulos', this.titulo);
    console.log('data', this.data);
    
    
  }

  initOpts = {
    renderer: 'svg',
    width: 900,
    height: 300,
  };

  options: EChartsOption = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: this.titulo,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'Counters',
      type: 'bar',
      barWidth: '60%',
      data: this.data
    }]
  };

}
