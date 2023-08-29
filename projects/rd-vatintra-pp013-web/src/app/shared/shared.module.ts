import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdVatsbtintraLibModule } from 'rd-vatsbtintra-lib';

import { TaxpayerInfoComponent } from './taxpayer-info/taxpayer-info.component';
import { TaxpayerPropertyComponent } from './taxpayer-property/taxpayer-property.component';
import { TaxpayerAddressComponent } from './taxpayer-address/taxpayer-address.component';
import { NgxMaskModule } from 'ngx-mask';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NumberOnlyDirective } from 'projects/rd-vatsbtintra-lib/src/lib/shared/directive/number-only.directive';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [
    TaxpayerInfoComponent,
    TaxpayerPropertyComponent,
    TaxpayerAddressComponent,
    ModalAlertComponent,
    ModalConfirmComponent,
    NumberOnlyDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdVatsbtintraLibModule,
    NgxMaskModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [
    TaxpayerInfoComponent,
    TaxpayerPropertyComponent,
    TaxpayerAddressComponent,
    ModalAlertComponent,
    ModalConfirmComponent,
    NumberOnlyDirective,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdVatsbtintraLibModule,
    NgxMaskModule,
    BsDatepickerModule,
    ModalModule
  ],
})
export class SharedModule { }
