import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class CategoryService extends DataService {

  constructor(http: Http) {
    super('/api/category', http);
  }

}
