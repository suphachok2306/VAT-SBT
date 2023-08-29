import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdvatsbtintraChangeSharedModule } from 'projects/rd-vatsbtintra-change-web/src/app/app.module';
import { RdvatsbtintraDashboardSharedModule } from 'projects/rd-vatsbtintra-dashboard-web/src/app/app.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RdvatsbtintraDashboardSharedModule.forRoot(),
    RdvatsbtintraChangeSharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
