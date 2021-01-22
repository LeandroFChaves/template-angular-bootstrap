import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
  HttpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ServerLogService } from './server-log.service';
import { ServerLog } from './server-log';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private serverLogService: ServerLogService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let stack: string = '';

        if (error.error.errors instanceof Array) {
          stack = error.error.errors.map((m: any) => m.message).join('\n');
        }

        let log: ServerLog = {
          message: error.message,
          url: error.url,
          username: 'this.keycloakService.getUsername()',
          stack: stack,
        };

        const navigationExtras: NavigationExtras = {
          state: { log },
        };

        switch (error.status) {
          case 403: {
            this.router.navigate(['errors', '403'], navigationExtras);
            break;
          }
          case 404: {
            this.router.navigate(['errors', '404'], navigationExtras);
            break;
          }
          case 500: {
            this.router.navigate(['errors', '500'], navigationExtras);
            break;
          }
          case 503: {
            this.router.navigate(['errors', '503'], navigationExtras);
            break;
          }
          case 504: {
            this.router.navigate(['errors', '504'], navigationExtras);
            break;
          }
          default: {
            this.router.navigate(['errors', 'error'], navigationExtras);
            break;
          }
        }

        this.serverLogService.log(log, error);

        return of(undefined);
      })
    ) as Observable<HttpEvent<any>>;
  }
}
