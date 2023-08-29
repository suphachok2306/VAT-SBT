import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateFormRoutingModule } from './create-form-routing.module';
import { SearchCreateFormComponent } from './search-create-form/search-create-form.component';
import { CreateFormComponent } from './create-form.component';
import { CreateFormCompletedComponent } from './create-form-completed/create-form-completed.component';
import { Step1CreateFormComponent } from './step1-create-form/step1-create-form.component';
import { Step2CreateFormComponent } from './step2-create-form/step2-create-form.component';
import { Step3CreateFormComponent } from './step3-create-form/step3-create-form.component';
import { Step4CreateFormComponent } from './step4-create-form/step4-create-form.component';
import { Step5CreateFormComponent } from './step5-create-form/step5-create-form.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    CreateFormComponent,
    SearchCreateFormComponent,
    Step1CreateFormComponent,
    Step2CreateFormComponent,
    Step3CreateFormComponent,
    Step4CreateFormComponent,
    Step5CreateFormComponent,
    CreateFormCompletedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CreateFormRoutingModule
  ]
})
export class CreateFormModule { }
