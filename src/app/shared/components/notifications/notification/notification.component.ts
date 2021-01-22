import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { Alert, AlertType } from '../notification';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  @Input() timeout = 3000;

  alerts: Alert[] = [];
  dismissible: boolean = true;

  constructor(private notificationService: NotificationsService) {
    this.notificationService.getAlert().subscribe((alert) => {
      if (!alert) {
        this.alerts = [];
        return;
      }

      this.alerts.push(alert);
      setTimeout(() => this.removeAlert(alert), this.timeout);
    });
  }

  removeAlert(alertToRemove: Alert) {
    this.alerts = this.alerts.filter((alert) => alert != alertToRemove);
  }

  getAlertClass(alert: Alert) {
    if (!alert) return '';

    switch (alert.alertType) {
      case AlertType.DANGER:
        return 'danger';
      case AlertType.INFO:
        return 'info';
      case AlertType.SUCCESS:
        return 'success';
      case AlertType.WARNING:
        return 'warning';
    }
  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter((alert) => alert !== dismissedAlert);
  }
}
