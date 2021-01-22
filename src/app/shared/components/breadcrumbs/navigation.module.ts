import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoostrapModule } from './../../../core/bootstrap/boostrap.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [BreadcrumbComponent],

  imports: [RouterModule, CommonModule, BoostrapModule],

  exports: [BreadcrumbComponent],
})
export class NavigationModule {}
