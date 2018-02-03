import { UnauthorizedError } from './../errors/unauthorized-error';
import { HttpClient } from '@angular/common/http';
import { AppError } from './../errors/app-error';
import { NotFoundError } from './../errors/not-found-error';
import { BadInput } from './../errors/bad-input';

import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

export class DataService {
  static pendingReqCount = 0;
  static pendingReq: EventEmitter<number> = new EventEmitter();

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .map(response => response)
      .catch(this.handleError);
  }

  getByQuery(query: string) {
    return this.http.get(this.url + '?'  + query)
      .map(response => response)
      .catch(this.handleError);
  }

  getById(id: string) {
    return this.http.get(this.url + '/' + id)
      .map(response => response)
      .catch(this.handleError);
  }

  getByIdWithAuth(id: string, resource) {
    return this.http.post(this.url + '/' + id, resource)
      .map(response => response)
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, resource)
      .map(response => response)
      .catch(this.handleError);
  }

  update(id, resource) {
    return this.http.patch(this.url + '/' + id , resource)
      .map(response => response)
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error));
    }

    if (error.status === 401) {
      return Observable.throw(new UnauthorizedError(error));
    }

    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }

    return Observable.throw(new AppError(error));
  }

}
