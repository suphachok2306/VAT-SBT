import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RejectRoutingModule } from './reject-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { RejectComponent } from './reject.component';
import { SearchRejectComponent } from './search-reject/search-reject.component';
import { SaveRejectComponent } from './save-reject/save-reject.component';


@NgModule({
  declarations: [
    RejectComponent,
    SearchRejectComponent,
    SaveRejectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RejectRoutingModule
  ]
})
export class RejectModule { }
