import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {

  order: string;
  resultGame:any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        this.order = params.filter;
        console.log(this.order); // popular
      }
    );
        this.GetInfo();
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
    });
}

}
