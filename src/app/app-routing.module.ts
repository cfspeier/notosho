import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BarsliderComponent} from './barslider/barslider.component';
import {BarscannerComponent} from './barscanner/barscanner.component';


const routes: Routes = [
  {path: "", redirectTo:"/barscanner", pathMatch:"full"},
  {path: "barscanner", component: BarscannerComponent},
  {path: "barslider", component: BarsliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
