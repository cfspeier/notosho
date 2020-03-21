import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barscanner',
  templateUrl: './barscanner.component.html',
  styleUrls: ['./barscanner.component.css']
})
export class BarscannerComponent implements OnInit {
  showOverlayScanner = false

    constructor(private router: Router) { }

  ngOnInit() {
  }

  list_codes = [];

  scanSuccessHandler(event): void {
    console.log(event)
    if(this.showOverlayScanner)
    {
      this.list_codes.push(event)
    }
    this.showOverlayScanner = false

  }

    jumpToSlider () {
            this.router.navigateByUrl('/barslider');
    };


  showOverlay() : void {
    this.showOverlayScanner = !this.showOverlayScanner
  }
}
