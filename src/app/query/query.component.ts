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
  constructor(private http: HttpClient) { } // <---

  ngOnInit() {   // <---

    this.query().subscribe((result)=>{
      // console.log("Valores de query: ", result);
      this.vals=result[this.id];
        console.log('data', this.vals);
    });

    this.queryAll().subscribe((result)=>{
      this.valsAll=result[0];
        console.log('data All: ', this.valsAll);
        console.log('num', this.valsAll.length);
        this.iter();
    });
    
    
  }

  query(){
    return this.http.get('http://18.208.150.59:8000/api/query');
  }

  queryAll(){
    return this.http.get('http://18.208.150.59:8000/api/queryAll');
  }

  queryOne(val){
    return this.http.get('http://18.208.150.59:8000/api/queryOne',val);
  }

  iter(){
    for(let x=0; x<10; x++){
      console.log('dat found', this.valsAll[x].appid);
      
      this.queryOne(this.valsAll[x].appid).subscribe((result)=>{
        this.vals=result[this.id];
          console.log('data', this.vals);
      });
      
    }
  }

}
