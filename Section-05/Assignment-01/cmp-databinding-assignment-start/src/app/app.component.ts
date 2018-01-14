import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  intervalNumbers = [];

  onIntervalTicked(intNum: number) {
    this.intervalNumbers.push(intNum);
  }

}
