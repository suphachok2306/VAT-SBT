import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { MainComponent } from './modules/components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'request-form',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./modules/components/request-form/request-form.module').then(m => m.RequestFormModule),
        data: { preload: false }
      },
      {
        path: 'ext-app',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./modules/components/extapp/extapp.module').then(m => m.ExtappModule),
      },
      {
        path: 'consider-request',
        loadChildren: () => import('./modules/components/consider-request/consider-request.module').then(m => m.ConsiderRequestModule),
      }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: '/request-form'
  // },
  // {
  //   path: 'rd-vatsbtintra-dashboard-web',
  //   redirectTo: '/request-form',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
