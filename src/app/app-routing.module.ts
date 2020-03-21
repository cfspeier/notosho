import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BarsliderComponent} from './barslider/barslider.component';
import {BarscannerComponent} from './barscanner/barscanner.component';
import {ReadbarcodesComponent} from './readbarcodes/readbarcodes.component';

const routes: Routes = [
  {path: "", redirectTo:"/barscanner", pathMatch:"full"},
  {path: "barscanner", component: BarscannerComponent},
  {path: "barslider", component: BarsliderComponent},
  {path: "read", component: ReadbarcodesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
