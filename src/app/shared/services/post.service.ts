import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PostService {

  constructor(private http: Http) { }

  getAll() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  get(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

}
