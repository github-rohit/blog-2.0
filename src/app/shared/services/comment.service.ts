import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CommentService {

  constructor(private http: Http) { }

  getCommentForPost(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + id);
  }

  save(data) {
    return this.http.post('', data);
  }

}
