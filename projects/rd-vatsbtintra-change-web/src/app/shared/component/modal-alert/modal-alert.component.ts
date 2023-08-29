import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { AlertModal, AlertModalService } from '../../../service/alert-modal.service';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss']
})
export class ModalAlertComponent implements OnInit {

  @ViewChild('staticModal') staticModal!: ModalDirective;
  modalSubscription!: Subscription;
  generalModalObj!: AlertModal;
  // tslint:disable-next-line:ban-types
  cb!: Function;

  constructor(private alertModalService: AlertModalService, private router: Router) { }

  ngOnInit() {
    this.modalSubscription = this.alertModalService.modalEvent().subscribe((data) => {
      if (data && data.show) {
        this.generalModalObj = data;
        this.showModal();
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.staticModal.isShown) {
          this.callBack(() => { });
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

  callBack(_cb = () => { }) {
    this.staticModal.hide();
    this.cb = _cb;
    if (this.generalModalObj.cb) {
      this.cb = this.generalModalObj.cb;
      this.cb();
    } else {
      this.cb();
    }
  }
}
