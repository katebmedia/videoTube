import { BaseClass } from "../base-class";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


const MINUTES_UNITL_AUTO_LOGOUT = 5 // in mins
const CHECK_INTERVAL = 1000 // in ms
const STORE_KEY =  'lastAction';

@Injectable()
export class AutoLogoutService extends BaseClass {

  get lastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
  }
  set lastAction(value) {
    localStorage.setItem(STORE_KEY, value.toString());
  }

  constructor(public http: HttpClient) {
    super(http);
    this.check();
    this.initListener();
    this.initInterval();
  }

  initListener() {
    document.body.addEventListener('click', () => this.reset());
  }

  reset() {
    this.lastAction = Date.now();
  }

  initInterval() {
    setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  check() {
    const now = Date.now();
    const timeleft = this.lastAction + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    if (isTimeout && this.isLogin()) {
      this.logout();
    }
  }
}