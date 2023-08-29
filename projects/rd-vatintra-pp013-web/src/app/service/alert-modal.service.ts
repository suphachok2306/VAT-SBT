import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {
  private _modalEvent: BehaviorSubject<AlertModal> = new BehaviorSubject<AlertModal>({ message: '', cb: () => { }, show: false });

  constructor(

  ) { }

  modalEvent() {
    return this._modalEvent.asObservable();
  }

  show(alertModal: AlertModal) {
    this._modalEvent.next(alertModal);
  }
}

export interface AlertModal {
  message: string;
  // tslint:disable-next-line:ban-types
  cb?: Function;
  show: boolean;
}
