import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { NextComponent } from './next/next.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  {path:'', component:QueryComponent},
  {path:'home', component: QueryComponent},
  {path:'info', component: GameInfoComponent},
  {path:'next', component: NextComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
