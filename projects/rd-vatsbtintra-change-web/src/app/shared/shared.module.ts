import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAlertComponent } from './component/modal-alert/modal-alert.component';
import { ModalConfirmComponent } from './component/modal-confirm/modal-confirm.component';
import { RdVatsbtintraLibModule } from 'projects/rd-vatsbtintra-lib/src/public-api';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule, TooltipModule } from 'ngx-bootstrap-th';
import { NgxMaskModule } from 'ngx-mask';
import { NumberFormatDirective } from '../directive/number-format.directive';

@NgModule({
  declarations: [
    ModalAlertComponent,
    ModalConfirmComponent,
    NumberFormatDirective
  ],
  imports: [
    CommonModule,
    RdVatsbtintraLibModule,
    NzTableModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxMaskModule.forRoot(),
  ],
  exports: [
    CommonModule,
    ModalAlertComponent,
    ModalConfirmComponent,
    RdVatsbtintraLibModule,
    NzTableModule,
    ModalModule,
    BsDatepickerModule,
    NgxMaskModule,
    NumberFormatDirective
  ],
})
export class SharedModule { }
