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

  toggleSecret() {
    this.showSecret = !this.showSecret;
    this.log.push(Date.now());
  }

  constructor() { }

  ngOnInit() {
  }

}
