import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../../core/auth/auth.service';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['navbar-user.component.scss'],
})
export class NavbarUserComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout(): void {
    this.authService.logout();
  }
}
