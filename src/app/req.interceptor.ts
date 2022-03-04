import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Injectable()
export class ReqInterceptor implements HttpInterceptor {

  constructor(private LoaderService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(finalize(
      () => {
        this.LoaderService.hide();
      }
    ));
  }
}
