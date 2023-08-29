import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchConsiderComponent } from './search-consider/search-consider.component';
import { SaveConsiderComponent } from './save-consider/save-consider.component';
import { ConsiderCompletedComponent } from './consider-completed/consider-completed.component';
import { ConsiderComponent } from './consider.component';

const routes: Routes = [
  {
    path: '',
    component: ConsiderComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      }, {
        path: 'search',
        component: SearchConsiderComponent,
      }, {
        path: 'save',
        component: SaveConsiderComponent,
      }, {
        path: 'completed',
        component: ConsiderCompletedComponent,
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
export class ConsiderRoutingModule { }
