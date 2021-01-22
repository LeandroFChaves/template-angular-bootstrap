import { Component, OnInit } from '@angular/core';

import { NotificationsService } from './../../shared/components/notifications/notifications.service';
import { ModalsService } from './../../shared/components/modals/modals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private modalsService: ModalsService,
    private notificationService: NotificationsService
  ) {}

  ngOnInit(): void {}

  modalConfirm() {
    this.modalsService
      .showConfirm('Confirmação', 'Tem certeza?', 'Sim', 'Não')
      .subscribe(
        (success) => {
          if (success) {
            this.notificationService.success('Clicou em sim!');
          } else {
            this.notificationService.warning('Clicou em não!');
          }
        },
        (error) => {
          console.log('Erro. Tente novamente mais tarde.' + error);
        }
      );
  }

  modalPopup() {
    this.modalsService.showPopup('Popup', 'Mensagem').subscribe(
      (success) => {
        if (success) {
          this.notificationService.success('Clicou em Ok!');
        }
      },
      (error) => {
        console.log('Erro. Tente novamente mais tarde.' + error);
      }
    );
  }
}
