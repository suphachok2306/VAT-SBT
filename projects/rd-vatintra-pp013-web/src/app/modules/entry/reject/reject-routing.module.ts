import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RejectComponent } from './reject.component';
import { SaveRejectComponent } from './save-reject/save-reject.component';
import { SearchRejectComponent } from './search-reject/search-reject.component';

const routes: Routes = [
  {
    path: '',
    component: RejectComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      }, {
        path: 'search',
        component: SearchRejectComponent,
      }, {
        path: 'save',
        component: SaveRejectComponent
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
export class RejectRoutingModule { }
