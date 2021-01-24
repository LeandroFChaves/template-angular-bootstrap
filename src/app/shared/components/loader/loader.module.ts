import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';

@NgModule({
  declarations: [LoaderComponent],

  imports: [CommonModule, NgxSpinnerModule],

  exports: [LoaderComponent],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
})
export class LoaderModule {}
