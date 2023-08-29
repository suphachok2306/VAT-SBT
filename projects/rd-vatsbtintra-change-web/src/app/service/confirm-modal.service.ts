import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {
  private _modalEvent: BehaviorSubject<ConfirmModal> = new BehaviorSubject<ConfirmModal>({ message: '', cancel: () => { }, accept: () => { }, show: false });

  constructor(

  ) { }

  modalEvent() {
    return this._modalEvent.asObservable();
  }

  show(alertModal: ConfirmModal) {
    this._modalEvent.next(alertModal);
  }
}

export interface ConfirmModal {
  message: string;
  // tslint:disable-next-line:ban-types
  cancel?: Function;
  // tslint:disable-next-line:ban-types
  accept?: Function;
  show: boolean;
}
