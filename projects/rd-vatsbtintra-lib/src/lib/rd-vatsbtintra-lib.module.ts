import { NgModule } from '@angular/core';
import { RdVatsbtintraLibComponent } from './rd-vatsbtintra-lib.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { FooterComponent } from './layouts/footer/footer.component';



@NgModule({
  declarations: [
    RdVatsbtintraLibComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
  ],
  exports: [
    RdVatsbtintraLibComponent,
    NavbarComponent,
  ]
})
export class RdVatsbtintraLibModule { }
