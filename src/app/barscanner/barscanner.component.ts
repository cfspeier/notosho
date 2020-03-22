import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'app-barscanner',
  templateUrl: './barscanner.component.html',
  styleUrls: ['./barscanner.component.css']
})
export class BarscannerComponent implements OnInit {
  showOverlayScanner = false

    constructor(private router: Router, public data: DataService) { }

  ngOnInit() {
    this.data.getUniqueCartCode();
  }

  list_codes = [];

  scanSuccessHandler(event): void {
    console.log(event)
    if(this.showOverlayScanner)
    {
      this.data.addCartItem(event)
    }
    this.showOverlayScanner = false

  }

    public jumpToSlider () {
            this.router.navigateByUrl('/barslider');
    };


  showOverlay() : void {
    this.showOverlayScanner = !this.showOverlayScanner
  }
}
