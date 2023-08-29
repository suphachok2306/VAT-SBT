import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveComponent } from './approve.component';
import { SaveApproveComponent } from './save-approve/save-approve.component';
import { SearchApproveComponent } from './search-approve/search-approve.component';

const routes: Routes = [
  {
    path: '',
    component: ApproveComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      }, {
        path: 'search',
        component: SearchApproveComponent,
      }, {
        path: 'save',
        component: SaveApproveComponent
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
export class ApproveRoutingModule { }
