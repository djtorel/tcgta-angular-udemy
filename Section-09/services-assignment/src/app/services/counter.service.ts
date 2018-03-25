import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activeCount = 0;
  inactiveCount = 0;

  constructor() { }

  addActiveCount() {
    this.activeCount++;
    console.log('Active click count: ', this.activeCount);
  }

  addInactiveCount() {
    this.inactiveCount++;
    console.log('Inactive click count: ', this.inactiveCount);
  }

}
