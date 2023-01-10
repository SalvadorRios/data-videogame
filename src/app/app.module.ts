import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { GraficasComponent } from './graficas/graficas.component';
import { QueryComponent } from './query/query.component';

import { HttpClientModule } from '@angular/common/http';
import { GameInfoComponent } from './game-info/game-info.component';
import { ErrorComponent } from './error/error.component';
import { NextComponent } from './next/next.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    GraficasComponent,
    QueryComponent,
    GameInfoComponent,
    ErrorComponent,
    NextComponent,
    HeaderComponent,
    HomeComponent
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
