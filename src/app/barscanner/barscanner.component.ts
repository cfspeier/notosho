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

    constructor(private router: Router, private data: DataService) { }

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
    this.data.eanList = this.list_codes;
  }

    public jumpToSlider () {
            this.router.navigateByUrl('/barslider');
    };


  showOverlay() : void {
    this.showOverlayScanner = !this.showOverlayScanner
  }
}
