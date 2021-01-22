import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  qtdNotificacoes: number = 2;
  qtdMensagens: number = 1;
  isShown: boolean = true;
  topNotificacoes: any[] = [];

  constructor() {}

  ngOnInit(): void {
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
