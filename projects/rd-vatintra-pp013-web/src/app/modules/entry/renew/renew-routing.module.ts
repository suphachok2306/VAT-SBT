import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenewComponent } from './renew.component';
import { SaveRenewComponent } from './save-renew/save-renew.component';
import { SearchRenewComponent } from './search-renew/search-renew.component';

const routes: Routes = [
  {
    path: '',
    component: RenewComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      }, {
        path: 'search',
        component: SearchRenewComponent,
      }, {
        path: 'save',
        component: SaveRenewComponent,
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
export class RenewRoutingModule { }
