import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {

  vals:any;
  valsAll=[];
  valsGamesResult:any;
  gamesIter=[];
  number=2
  constructor(private http: HttpClient) { } // <---


  ngOnInit() {   // <---
    
    this.GetGames();

  }

  next(){
    this.number=this.number+1;
    this.GetGames();
    console.log(this.number);
    
  }

  prev(){
    this.number=this.number-1;
    this.GetGames();
    console.log(this.number);
    
  }

  queryGames(val){
    console.log('query', this.number);
    return this.http.get('http://localhost:8000/api/Next',{
      params:{
        val
      }
    });
  }

  GetGames(){
      this.queryGames(this.number).subscribe((result)=>{
        this.valsGamesResult=result;
        this.gamesIter = this.valsGamesResult.results;
          console.log('Data Games: ', this.gamesIter);
      });
  }

}
