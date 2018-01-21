import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService {
  params: string;

  constructor(http: Http) {
    super('/api/posts', http);
  }

  getPostByQuery(qry) {
    this.params = '';
    // tslint:disable-next-line:forin
    for (const key in qry) {
      this.params = this.params ? this.params + '&' : '';
      this.params += `${key}=${qry[key]}`;
    }

    return this.getByQuery(this.params);
  }

}
