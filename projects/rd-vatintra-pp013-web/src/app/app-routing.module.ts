import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./modules/entry/main-page/main-page.module').then(m => m.MainPageModule),
    data: { preload: false }
  }, {
    path: 'consider',
    loadChildren: () => import('./modules/entry/consider/consider.module').then(m => m.ConsiderModule),
    data: { preload: false }
  }, {
    path: 'create-form',
    loadChildren: () => import('./modules/entry/create-form/create-form.module').then(m => m.CreateFormModule),
    data: { preload: false }
  }, {
    path: 'renew',
    loadChildren: () => import('./modules/entry/renew/renew.module').then(m => m.RenewModule),
    data: { preload: false }
  }, {
    path: 'transfer',
    loadChildren: () => import('./modules/entry/transfer/transfer.module').then(m => m.TransferModule),
    data: { preload: false }
  }, {
    path: 'accept-transfer',
    loadChildren: () => import('./modules/entry/accept-transfer/accept-transfer.module').then(m => m.AcceptTransferModule),
    data: { preload: false }
  }, {
    path: 'approve',
    loadChildren: () => import('./modules/entry/approve/approve.module').then(m => m.ApproveModule),
    data: { preload: false }
  }, {
    path: 'reject',
    loadChildren: () => import('./modules/entry/reject/reject.module').then(m => m.RejectModule),
    data: { preload: false }
  }, {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
