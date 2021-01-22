import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationComponent } from './notification/notification.component';
import { BoostrapModule } from './../../../core/bootstrap/boostrap.module';

@NgModule({
  declarations: [NotificationComponent],

  imports: [CommonModule, BoostrapModule],

  exports: [NotificationComponent],
})
export class NotificationModule {}
