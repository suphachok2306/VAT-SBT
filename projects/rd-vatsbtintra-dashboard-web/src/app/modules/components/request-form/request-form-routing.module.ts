import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtappComponent } from '../extapp/extapp.component';
import { RequestFormComponent } from './request-form.component';

const routes: Routes = [
  {
    path: '',
    component: RequestFormComponent,
    children: [
      {
        path: 'xxx',
        // canActivate: [AuthGuard],
        component: ExtappComponent,
      },
      {
        path: 'xxx',
        // canActivate: [AuthGuard],
        component: ExtappComponent,
      }
    ]
  },
  {
    path: 'xxx',
    // canActivate: [AuthGuard],
    component: ExtappComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestFormRoutingModule { }
