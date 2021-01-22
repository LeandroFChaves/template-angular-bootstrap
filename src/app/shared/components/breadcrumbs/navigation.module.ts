import { BoostrapModule } from './../../bootstrap/boostrap.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [BreadcrumbComponent],

  imports: [RouterModule, CommonModule, BoostrapModule],

  exports: [BreadcrumbComponent],
})
export class NavigationModule {}
