import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveTransferComponent } from './save-transfer/save-transfer.component';
import { SearchTransferComponent } from './search-transfer/search-transfer.component';
import { TransferComponent } from './transfer.component';

const routes: Routes = [
  {
    path: '',
    component: TransferComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      }, {
        path: 'search',
        component: SearchTransferComponent,
      }, {
        path: 'save',
        component: SaveTransferComponent
      }
    ]
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule { }
