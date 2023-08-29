import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { SearchTransferComponent } from './search-transfer/search-transfer.component';
import { SharedModule } from '../../../shared/shared.module';
import { TransferComponent } from './transfer.component';
import { SaveTransferComponent } from './save-transfer/save-transfer.component';


@NgModule({
  declarations: [
    TransferComponent,
    SearchTransferComponent,
    SaveTransferComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TransferRoutingModule
  ]
})
export class TransferModule { }
