import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsiderRequestRoutingModule } from './consider-request-routing.module';
import { ConsiderRequestVatComponent } from './consider-request-vat/consider-request-vat.component';
import { ConsiderRequestSbtComponent } from './consider-request-sbt/consider-request-sbt.component';
import { ChangesByStaffComponent } from './changes-by-staff/changes-by-staff.component';


@NgModule({
  declarations: [
    ConsiderRequestVatComponent,
    ConsiderRequestSbtComponent,
    ChangesByStaffComponent
  ],
  imports: [
    CommonModule,
    ConsiderRequestRoutingModule
  ],
  exports: [
    ConsiderRequestVatComponent,
    ConsiderRequestSbtComponent
  ]
})
export class ConsiderRequestModule { }
