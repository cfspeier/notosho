import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-barslider',
  templateUrl: './barslider.component.html',
  styleUrls: ['./barslider.component.css']
})
export class BarsliderComponent implements OnInit {

  constructor(private router: Router, public data: DataService) { }

ngOnInit() {

}

public jumpToScanner () {
      this.router.navigateByUrl('/barscanner');

};


  ngAfterViewInit() {
  //  $('.carousel').carousel({
  //      interval: 2000
  //  });
  }

}
