import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { ConfirmModal, ConfirmModalService } from '../../service/confirm-modal.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit, OnDestroy {

  @ViewChild('staticModal') staticModal!: ModalDirective;
  modalSubscription!: Subscription;
  generalModalObj!: ConfirmModal;
  // tslint:disable-next-line:ban-types
  callbackModal!: Function;

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
    this.callbackModal = _cb;
    if (this.generalModalObj.cancel) {
      this.callbackModal = this.generalModalObj.cancel;
    }
    this.staticModal.hide();
  }

  accept() {
    this.callbackModal = () => { };
    if (this.generalModalObj.accept) {
      this.callbackModal = this.generalModalObj.accept;
    }
    this.staticModal.hide();
  }

  onHidden() {
    if (this.callbackModal) { this.callbackModal(); }
  }
}
