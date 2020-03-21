import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barscanner',
  templateUrl: './barscanner.component.html',
  styleUrls: ['./barscanner.component.css']
})
export class BarscannerComponent implements OnInit {
  showOverlayScanner = false

  constructor() { }

  ngOnInit() {
  }

  list_codes = [];

  scanSuccessHandler(event): void {
    console.log(event)
    this.list_codes.push(event)
    this.showOverlayScanner = false
  }



  showOverlay() : void {
    this.showOverlayScanner = !this.showOverlayScanner
  }
}
