import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpHandler, HttpResponse, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    DataService.pendingReq.emit(++DataService.pendingReqCount);

    return next.handle(req).do(event => {
        if (event instanceof HttpResponse) {
          DataService.pendingReq.emit(--DataService.pendingReqCount);
        }
      });
  }
}
