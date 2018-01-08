import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-secret',
  templateUrl: './show-secret.component.html',
  styleUrls: ['./show-secret.component.css']
})
export class ShowSecretComponent implements OnInit {

  showSecret = false;
  log = [];
  timeStamps = [0];
  clickCount = 0;

  toggleSecret() {
    this.showSecret = !this.showSecret;
    this.clickCount++;
    this.log.push(this.log.length + 1);
    this.timeStamps.push(Date.now());
  }

  constructor() { }

  ngOnInit() {
  }

}
