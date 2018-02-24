import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalTicked = new EventEmitter<number>();
  intervalStarted = false;
  interval;
  intervalNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.intervalTicked.emit(this.intervalNumber + 1);
      this.intervalNumber++;
    }, 1000);
    this.intervalStarted = true;
  }

  stopInterval() {
    if (this.interval._id) {
      clearInterval(this.interval._id);
    }
    this.intervalStarted = false;
  }

}
