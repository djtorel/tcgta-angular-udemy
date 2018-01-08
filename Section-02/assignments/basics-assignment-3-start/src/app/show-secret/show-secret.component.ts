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
  timeStamps = [];
  clickCount = 0;

  toggleSecret() {
    this.showSecret = !this.showSecret;
    this.log.push(this.clickCount++);
    this.timeStamps.push(Date.now());
  }

  constructor() { }

  ngOnInit() {
  }

}
