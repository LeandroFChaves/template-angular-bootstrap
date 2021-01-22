import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as StackTrace from 'stacktrace-js';

import { ServerLogService } from './../server-log.service';
import { ServerLog } from '../server-log';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector, private zone: NgZone) {}

  handleError(error: any): void {
    const location = this.injector.get(LocationStrategy);
    const serverLogService = this.injector.get(ServerLogService);
    const router = this.injector.get(Router);

    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const message = error.message ? error.message : error.toString();

    StackTrace.fromError(error).then((stackFrames) => {
      const stackAsString = stackFrames.map((sf) => sf.toString()).join('\n');

      let log: ServerLog = {
        message,
        url,
        username: 'keycloakService.getUsername()',
        stack: stackAsString,
      };

      this.zone.run(() => {
        const navigationExtras: NavigationExtras = {
          state: { log },
        };

        router.navigate(['errors', 'error'], navigationExtras).then();
      });

      serverLogService.log(log, error);
    });

    // throw error;
  }
}
