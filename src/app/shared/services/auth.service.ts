import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  get user(): object {
    const user = localStorage.getItem('currentUser');
    let returnObj;

    if (user) {
      returnObj = JSON.parse(user);
    } else {
      returnObj = {};
    }

    return returnObj;
  }

  set user(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  get token(): string {
    return localStorage.getItem('x-token') || '';
  }

  set token(token) {
    localStorage.setItem('x-token', JSON.stringify(token));
  }

}
