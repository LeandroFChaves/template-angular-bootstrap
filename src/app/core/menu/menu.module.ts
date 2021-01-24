import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoostrapModule } from './../bootstrap/boostrap.module';
import { LoaderModule } from './../../shared/components/loader/loader.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarUserComponent } from './navbar/navbar-user/navbar-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationModule } from './../../shared/components/breadcrumbs/navigation.module';
import { NotificationModule } from './../../shared/components/notifications/notification.module';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, NavbarUserComponent],

  imports: [
    RouterModule,
    CommonModule,
    BoostrapModule,
    NavigationModule,
    NotificationModule,
    LoaderModule,
  ],

  exports: [SidebarComponent, NavbarComponent, NavbarUserComponent],
})
export class MenuModule {}
