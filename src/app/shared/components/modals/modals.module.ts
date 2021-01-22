import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmModalComponent } from './modal-confirm/modal-confirm.component';
import { PopupModalComponent } from './modal-popup/modal-popup.component';

@NgModule({
  declarations: [ConfirmModalComponent, PopupModalComponent],

  imports: [CommonModule],
})
export class ModalsModule {}
