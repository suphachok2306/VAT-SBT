import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormCompletedComponent } from './create-form-completed/create-form-completed.component';
import { CreateFormComponent } from './create-form.component';
import { SearchCreateFormComponent } from './search-create-form/search-create-form.component';
import { CreateFormResolve } from './services/create-form.resolve';
import { Step1CreateFormComponent } from './step1-create-form/step1-create-form.component';
import { Step2CreateFormComponent } from './step2-create-form/step2-create-form.component';
import { Step3CreateFormComponent } from './step3-create-form/step3-create-form.component';
import { Step4CreateFormComponent } from './step4-create-form/step4-create-form.component';
import { Step5CreateFormComponent } from './step5-create-form/step5-create-form.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchCreateFormComponent
  }, {
    path: 'form',
    component: CreateFormComponent,
    resolve: {
      resolveData: CreateFormResolve
    },
    children: [
      {
        path: '',
        redirectTo: 'step1'
      }, {
        path: 'step1',
        component: Step1CreateFormComponent,
      }, {
        path: 'step2',
        component: Step2CreateFormComponent,
      }, {
        path: 'step3',
        component: Step3CreateFormComponent,
      }, {
        path: 'step4',
        component: Step4CreateFormComponent,
      }, {
        path: 'step5',
        component: Step5CreateFormComponent,
      }, {
        path: 'completed',
        component: CreateFormCompletedComponent,
      }
    ]
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'search'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CreateFormResolve]
})
export class CreateFormRoutingModule { }
