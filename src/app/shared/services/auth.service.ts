import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 

@Injectable()
export class AuthService {
  tokenKey = 'x-token';
  constructor() { }

  get user(): any {
    const token = this.token;
    let returnObj;

    if (token) {
      const jwt = new JwtHelper();
      returnObj = jwt.decodeToken(token);
    } else {
      returnObj = {};
    }

    return returnObj;
  }

  get token() {
    return localStorage.getItem(this.tokenKey) || '';
  }

  set token(token) {
    localStorage.setItem(this.tokenKey, token);
  }

  logout() { 
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn() {
    return tokenNotExpired(this.tokenKey);
  }

}
