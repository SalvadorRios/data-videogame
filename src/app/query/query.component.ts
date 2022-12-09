import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  vals:any;
  valsAll=[];
  id='1091500'
  name='';
  valsGamesResult:any;
  gamesIter=[];
  constructor(private http: HttpClient) { } // <---

  ngOnInit() {   // <---
    
    this.GetGames();

  }

  queryGames(){
    return this.http.get('http://localhost:8000/api/queryGames');
  }

  GetGames(){
      this.queryGames().subscribe((result)=>{
        this.valsGamesResult=result;
        this.gamesIter = this.valsGamesResult.results;
          console.log('Data Games: ', this.gamesIter);
      });
  }
  sendID(){
    console.log('holamundo');
    
      // this.router.navigate(
      //   ['/info'],
      //   { queryParams: { order: val, 'price-range': 'not-cheap' } }
      // );
  }
}
