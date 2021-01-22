import { Injectable } from '@angular/core';

import { ServerLog } from './server-log';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServerLogService {
  constructor() {}

  log(serverLog: ServerLog, error: any): void {
    if (environment.production) {
      console.error(serverLog);
    } else {
      console.error(error);
    }
  }
}
