import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceptTransferRoutingModule } from './accept-transfer-routing.module';
import { SearchAcceptTransferComponent } from './search-accept-transfer/search-accept-transfer.component';
import { SharedModule } from '../../../shared/shared.module';
import { AcceptTransferComponent } from './accept-transfer.component';
import { SaveAcceptTransferComponent } from './save-accept-transfer/save-accept-transfer.component';


@NgModule({
  declarations: [
    AcceptTransferComponent,
    SearchAcceptTransferComponent,
    SaveAcceptTransferComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AcceptTransferRoutingModule
  ]
})
export class AcceptTransferModule { }
