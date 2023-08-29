import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SearchCd01Component } from '../../components/cd01/search-cd01/search-cd01.component';
import { MainComponent } from './main.component';
import { SearchCh01Component } from '../../components/ch01/search-ch01/search-ch01.component';
import { DetailDt01Component } from '../../components/dt01/detail-dt01/detail-dt01.component';
import { SearchDt01Component } from '../../components/dt01/search-dt01/search-dt01.component';
import { TableCreateCh01Component } from '../../components/ch01/table-create-ch01/table-create-ch01.component';
import { TableCreateCd01Component } from '../../components/cd01/table-create-cd01/table-create-cd01.component';
import { DetailUpdateCd01Component } from '../../components/cd01/detail-update-cd01/detail-update-cd01.component';
import { DetailUpdateCh01Component } from '../../components/ch01/detail-update-ch01/detail-update-ch01.component';
import { DetailApproveDt01Component } from '../../components/dt01/detail-approve-dt01/detail-approve-dt01.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../shared/shared.module';
import { CreateDt01Component } from '../../components/dt01/create-dt01/create-dt01.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DetailUpdateRp01Component } from '../../components/rp01/detail-update-rp01/detail-update-rp01.component';
import { SearchRp01Component } from '../../components/rp01/search-rp01/search-rp01.component';
import { TableCreateRp01Component } from '../../components/rp01/table-create-rp01/table-create-rp01.component';

@NgModule({
  declarations: [
    MainComponent,
    SearchCd01Component,
    SearchCh01Component,
    SearchDt01Component,
    DetailDt01Component,
    TableCreateCh01Component,
    TableCreateCd01Component,
    DetailUpdateCd01Component,
    DetailUpdateCh01Component,
    DetailApproveDt01Component,
    CreateDt01Component,
    DetailUpdateRp01Component,
    SearchRp01Component,
    TableCreateRp01Component
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    NzTableModule,
    NgSelectModule,
    ModalModule.forRoot(),
    SharedModule,
  ]
})
export class MainModule { }
