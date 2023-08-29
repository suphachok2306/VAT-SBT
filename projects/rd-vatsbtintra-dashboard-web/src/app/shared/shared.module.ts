import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'projects/rd-vatsbtintra-lib/src/lib/layouts/navbar/navbar.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RdVatsbtintraLibModule } from 'rd-vatsbtintra-lib';

@NgModule({
  declarations: [
    // NavbarComponent,
  ],
  imports: [
    TabsModule.forRoot(),
    CommonModule,
    RdVatsbtintraLibModule
  ],
  exports: [
    TabsModule,
    CommonModule,
    // NavbarComponent,
    RdVatsbtintraLibModule
  ],
})
export class SharedModule { }
