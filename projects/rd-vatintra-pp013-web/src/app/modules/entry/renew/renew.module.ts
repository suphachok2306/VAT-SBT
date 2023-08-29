import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenewRoutingModule } from './renew-routing.module';
import { SearchRenewComponent } from './search-renew/search-renew.component';
import { RenewComponent } from './renew.component';
import { SharedModule } from '../../../shared/shared.module';
import { SaveRenewComponent } from './save-renew/save-renew.component';


@NgModule({
  declarations: [
    RenewComponent,
    SearchRenewComponent,
    SaveRenewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RenewRoutingModule
  ]
})
export class RenewModule { }
