import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarsliderComponent } from './barslider/barslider.component';
import { BarscannerComponent } from './barscanner/barscanner.component';

@NgModule({
  declarations: [
    AppComponent,
    BarsliderComponent,
    BarscannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    /*SliderModule,*/
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
