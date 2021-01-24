import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  qtdNotificacoes: number = 2;
  qtdMensagens: number = 1;
  isShown: boolean = true;
  topNotificacoes: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;

    this.topNotificacoes = [
      {
        message: 'You have 2 followers',
        time: '4 minutes ago',
        class: 'fab fa-twitter bg-blue',
      },
      {
        message: 'Server Rebooted',
        time: '15 minutes ago',
        class: 'fas fa-cloud-upload-alt bg-orange',
      },
    ];
  }

  toggle() {
    this.isShown = !this.isShown;
  }
}
