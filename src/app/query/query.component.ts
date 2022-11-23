import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

    // this.query().subscribe((result)=>{
    //   // console.log("Valores de query: ", result);
    //   this.vals=result[this.id];
    //     console.log('data', this.vals);
    // });

    // this.queryAll().subscribe((result)=>{
    //   this.valsAll=result[0];
    //     console.log('data All: ', this.valsAll);
    //     console.log('num', this.valsAll.length);
    //     this.iter();
    // });
    
    this.GetGames();
  }

  query(){
    return this.http.get('http://localhost:8000/api/query');
  }

  queryAll(){
    return this.http.get('http://localhost:8000/api/queryAll');
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
}
