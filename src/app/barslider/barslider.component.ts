import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-barslider',
  templateUrl: './barslider.component.html',
  styleUrls: ['./barslider.component.css']
})
export class BarsliderComponent implements OnInit {

  constructor(public data: DataService) { }

ngOnInit() {

}


  ngAfterViewInit() {
    $('.carousel').carousel({
        interval: 2000
    });
  }

}
