import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { authInterceptorProviders } from 'projects/rd-vatsbtintra-lib/src/lib/shared/Interceptor/auth.interceptor';
import { MainComponent } from './modules/components/main/main.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RequestFormModule } from './modules/components/request-form/request-form.module';
import { ConsiderRequestComponent } from './modules/components/consider-request/consider-request.component';
import { ConsiderRequestModule } from './modules/components/consider-request/consider-request.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConsiderRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    RequestFormModule,
    ConsiderRequestModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class RdvatsbtintraDashboardSharedModule{
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}
