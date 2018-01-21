import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService {

  constructor(http: Http) {
    super('/api/posts', http);
  }

}
