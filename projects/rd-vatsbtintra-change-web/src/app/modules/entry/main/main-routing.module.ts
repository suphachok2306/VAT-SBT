import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUpdateCd01Component } from '../../components/cd01/detail-update-cd01/detail-update-cd01.component';
import { SearchCd01Component } from '../../components/cd01/search-cd01/search-cd01.component';
import { TableCreateCd01Component } from '../../components/cd01/table-create-cd01/table-create-cd01.component';
import { DetailUpdateCh01Component } from '../../components/ch01/detail-update-ch01/detail-update-ch01.component';
import { SearchCh01Component } from '../../components/ch01/search-ch01/search-ch01.component';
import { TableCreateCh01Component } from '../../components/ch01/table-create-ch01/table-create-ch01.component';
import { CreateDt01Component } from '../../components/dt01/create-dt01/create-dt01.component';
import { DetailApproveDt01Component } from '../../components/dt01/detail-approve-dt01/detail-approve-dt01.component';
import { DetailDt01Component } from '../../components/dt01/detail-dt01/detail-dt01.component';
import { SearchDt01Component } from '../../components/dt01/search-dt01/search-dt01.component';
import { DetailUpdateRp01Component } from '../../components/rp01/detail-update-rp01/detail-update-rp01.component';
import { SearchRp01Component } from '../../components/rp01/search-rp01/search-rp01.component';
import { TableCreateRp01Component } from '../../components/rp01/table-create-rp01/table-create-rp01.component';
import { MainComponent } from './main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent
}, {
  path: 'rp01',
  children: [
    {
      path: 'search',
      component: SearchRp01Component
    }, {
      path: 'create',
      component: TableCreateRp01Component
    }, {
      path: 'detail-u',
      component: DetailUpdateRp01Component
    }, {
      path: '**',
      redirectTo: 'search'
    }
  ]
}, {
  path: 'cd01',
  children: [
    {
      path: 'search',
      component: SearchCd01Component
    }, {
      path: 'create',
      component: TableCreateCd01Component
    }, {
      path: 'detail-u',
      component: DetailUpdateCd01Component
    }, {
      path: '**',
      redirectTo: 'search'
    }
  ]
}, {
  path: 'ch01',
  children: [
    {
      path: 'search',
      component: SearchCh01Component
    }, {
      path: 'create',
      component: TableCreateCh01Component
    }, {
      path: 'detail-u',
      component: DetailUpdateCh01Component
    }, {
      path: '**',
      redirectTo: 'search'
    }
  ]
}, {
  path: 'dt01',
  children: [
    {
      path: 'search',
      component: SearchDt01Component
    }, {
      path: 'detail',
      component: DetailDt01Component
    }, {
      path: 'detail-approve',
      component: DetailApproveDt01Component
    }, {
      path: 'create',
      component: CreateDt01Component
    }, {
      path: '**',
      redirectTo: 'search'
    }
  ]
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
