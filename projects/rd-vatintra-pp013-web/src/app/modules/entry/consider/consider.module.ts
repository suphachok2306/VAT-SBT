import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsiderRoutingModule } from './consider-routing.module';
import { SearchConsiderComponent } from './search-consider/search-consider.component';
import { SaveConsiderComponent } from './save-consider/save-consider.component';
import { ConsiderCompletedComponent } from './consider-completed/consider-completed.component';
import { SharedModule } from '../../../shared/shared.module';
import { ConsiderComponent } from './consider.component';


@NgModule({
  declarations: [
    SearchConsiderComponent,
    SaveConsiderComponent,
    ConsiderCompletedComponent,
    ConsiderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConsiderRoutingModule
  ]
})
export class ConsiderModule { }
