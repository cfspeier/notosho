import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarsliderComponent } from './barslider/barslider.component';
import { BarscannerComponent } from './barscanner/barscanner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReadbarcodesComponent } from './readbarcodes/readbarcodes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarsliderComponent,
    BarscannerComponent,
    ReadbarcodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
