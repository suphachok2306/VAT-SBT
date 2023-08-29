import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtappRoutingModule } from './extapp-routing.module';
import { ExtappComponent } from './extapp.component';
import { SafePipe } from '../../../shared/pipes/safe.pipe';


@NgModule({
  declarations: [
    ExtappComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    ExtappRoutingModule
  ]
})
export class ExtappModule { }
