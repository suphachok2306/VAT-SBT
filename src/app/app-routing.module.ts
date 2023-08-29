import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RdvatsbtintraChangeSharedModule } from 'projects/rd-vatsbtintra-change-web/src/app/app.module';
import { RdvatsbtintraDashboardSharedModule } from 'projects/rd-vatsbtintra-dashboard-web/src/app/app.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  // {
  //   path: 'rd-vatsbtintra-dashboard-web',
  //   loadChildren: () => import('projects/rd-vatsbtintra-dashboard-web/src/app/app.module').then(m => m.RdvatsbtintraDashboardSharedModule),
  // },
  // {
  //   path: 'rd-vatsbtintra-change-web',
  //   loadChildren: () => import('projects/rd-vatsbtintra-change-web/src/app/app.module').then(m => m.RdvatsbtintraChangeSharedModule),
  // },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        enableTracing: false,
      }
    ),
    RdvatsbtintraDashboardSharedModule.forRoot(),
    RdvatsbtintraChangeSharedModule.forRoot(),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
