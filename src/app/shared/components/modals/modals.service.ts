import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ConfirmModalComponent } from './modal-confirm/modal-confirm.component';
import { PopupModalComponent } from './modal-popup/modal-popup.component';

@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  constructor(private modalService: BsModalService) {}

  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(
      ConfirmModalComponent
    );
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    const result$ = (<ConfirmModalComponent>bsModalRef.content).confirmResult;

    return result$.asObservable();
  }

  showPopup(title: string, msg: string, okTxt?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(PopupModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    const result$ = (<PopupModalComponent>bsModalRef.content).confirmResult;

    return result$.asObservable();
  }
}
