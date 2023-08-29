import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproveRoutingModule } from './approve-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ApproveComponent } from './approve.component';
import { SearchApproveComponent } from './search-approve/search-approve.component';
import { SaveApproveComponent } from './save-approve/save-approve.component';


@NgModule({
  declarations: [
    ApproveComponent,
    SearchApproveComponent,
    SaveApproveComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApproveRoutingModule
  ]
})
export class ApproveModule { }
