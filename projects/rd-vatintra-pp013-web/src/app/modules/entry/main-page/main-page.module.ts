import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from '../../../shared/shared.module';

import { ReportBusinessGoldAreaComponent } from '../../report/report-business-gold-area/report-business-gold-area.component';
import { ReportBusinessGoldReceiveComponent } from '../../report/report-business-gold-receive/report-business-gold-receive.component';
import { ReportBusinessUserRemoveComponent } from '../../report/report-business-user-remove/report-business-user-remove.component';
import { ReportBusinessNotificationAreaComponent } from '../../report/report-business-notification-area/report-business-notification-area.component';
import { ReportBusinessNotTransferComponent } from '../../report/report-business-not-transfer/report-business-not-transfer.component';
import { ReportBusinessNotApproveComponent } from '../../report/report-business-not-approve/report-business-not-approve.component';
import { ReportGoldVatApproveComponent } from '../../report/report-gold-vat-approve/report-gold-vat-approve.component';

import { UserComponent } from '../user/user.component';
import { UserGroupComponent } from '../user-group/user-group.component';
import { Pp013EntryProgramComponent } from '../user-group/components/pp013-entry-program/pp013-entry-program.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ReportBusinessGoldAreaComponent,
    ReportBusinessGoldReceiveComponent,
    ReportBusinessNotificationAreaComponent,
    ReportBusinessUserRemoveComponent,
    ReportBusinessNotTransferComponent,
    ReportBusinessNotApproveComponent,
    ReportGoldVatApproveComponent,
    UserComponent,
    UserGroupComponent,
    Pp013EntryProgramComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule
  ]
})
export class MainPageModule { }
