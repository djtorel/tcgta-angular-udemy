import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  private _activeUsers = ['Max', 'Anna'];
  private _inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  setToInactive(id: number) {
    this.counterService.addInactiveCount();
    this._inactiveUsers.push(this._activeUsers[id]);
    this._activeUsers.splice(id, 1);
  }

  setToActive(id: number) {
    this.counterService.addActiveCount();
    this._activeUsers.push(this._inactiveUsers[id]);
    this._inactiveUsers.splice(id, 1);
  }

  get activeUsers() {
    return this._activeUsers;
  }

  get inativeUsers() {
    return this._inactiveUsers;
  }

}
