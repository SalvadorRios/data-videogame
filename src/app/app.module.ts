import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { GraficasComponent } from './graficas/graficas.component';
import { QueryComponent } from './query/query.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GraficasComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [NgxEchartsModule.forRoot({echarts})],
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
