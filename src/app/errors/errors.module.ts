import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BoostrapModule } from './../core/bootstrap/boostrap.module';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { ErrorsRoutingModule } from './errors-routing.module';
import { ErrorComponent } from './error/error.component';
import { Error403Component } from './error403/error403.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { Error503Component } from './error503/error503.component';
import { Error504Component } from './error504/error504.component';

@NgModule({
  declarations: [
    ErrorComponent,
    Error403Component,
    Error404Component,
    Error500Component,
    Error503Component,
    Error504Component,
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ErrorsRoutingModule,
    BoostrapModule,
  ],

  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
})
export class ErrorsModule {}
