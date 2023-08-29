import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestFormRoutingModule } from './request-form-routing.module';
import { RequestFormComponent } from './request-form.component';


@NgModule({
  declarations: [
    RequestFormComponent
  ],
  imports: [
    CommonModule,
    RequestFormRoutingModule
  ],
  exports: [RequestFormComponent]
})
export class RequestFormModule { }
