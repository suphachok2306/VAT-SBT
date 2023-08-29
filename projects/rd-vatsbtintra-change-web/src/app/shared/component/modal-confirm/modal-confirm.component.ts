import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { ConfirmModal, ConfirmModalService } from '../../../service/confirm-modal.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  @ViewChild('staticModal') staticModal!: ModalDirective;
  modalSubscription!: Subscription;
  generalModalObj!: ConfirmModal;
  // tslint:disable-next-line:ban-types
  cancelFn!: Function;
  // tslint:disable-next-line:ban-types
  acceptFn!: Function;

  constructor(private confirmModalService: ConfirmModalService, private router: Router) { }

  ngOnInit() {
    this.modalSubscription = this.confirmModalService.modalEvent().subscribe((data) => {
      if (data && data.show) {
        this.generalModalObj = data;
        this.showModal();
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.staticModal.isShown) {
          this.cancel(() => { });
        }
      }
    });
  }

  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
  }

  showModal() {
    this.staticModal.show();
  }

  cancel(_cb = () => { }) {
    this.staticModal.hide();
    this.cancelFn = _cb;
    if (this.generalModalObj.cancel) {
      this.cancelFn = this.generalModalObj.cancel;
      this.cancelFn();
    } else {
      this.cancelFn();
    }
  }

  accept() {
    this.staticModal.hide();
    if (this.generalModalObj.accept) {
      this.acceptFn = this.generalModalObj.accept;
      this.acceptFn();
    }
  }
}
