import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'barslide';

  scanSuccessHandler(event): void {
    console.log(event)
    alert(event)
  }

}
