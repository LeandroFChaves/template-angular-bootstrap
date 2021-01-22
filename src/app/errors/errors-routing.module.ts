import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { Error403Component } from './error403/error403.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { Error503Component } from './error503/error503.component';
import { Error504Component } from './error504/error504.component';

const errorsRoutes: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
  },

  {
    path: '403',
    component: Error403Component,
  },

  {
    path: '404',
    component: Error404Component,
  },

  {
    path: '500',
    component: Error500Component,
  },

  {
    path: '503',
    component: Error503Component,
  },

  {
    path: '504',
    component: Error504Component,
  },

  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forChild(errorsRoutes)],
  exports: [RouterModule],
})
export class ErrorsRoutingModule {}
