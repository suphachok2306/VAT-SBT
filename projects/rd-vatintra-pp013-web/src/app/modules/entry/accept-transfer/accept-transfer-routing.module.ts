import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptTransferComponent } from './accept-transfer.component';
import { SaveAcceptTransferComponent } from './save-accept-transfer/save-accept-transfer.component';
import { SearchAcceptTransferComponent } from './search-accept-transfer/search-accept-transfer.component';

const routes: Routes = [
  {
    path: '',
    component: AcceptTransferComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      }, {
        path: 'search',
        component: SearchAcceptTransferComponent,
      }, {
        path: 'save',
        component: SaveAcceptTransferComponent
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
export class AcceptTransferRoutingModule { }
