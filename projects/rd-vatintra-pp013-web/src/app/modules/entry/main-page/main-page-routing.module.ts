import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

import { ReportBusinessGoldAreaSub1Component } from '../../report/report-business-gold-area/components/report-business-gold-area-sub1/report-business-gold-area-sub1.component';
import { ReportBusinessGoldAreaSub2Component } from '../../report/report-business-gold-area/components/report-business-gold-area-sub2/report-business-gold-area-sub2.component';
import { ReportBusinessGoldAreaComponent } from '../../report/report-business-gold-area/report-business-gold-area.component';

import { ReportBusinessGoldReceiveSub1Component } from '../../report/report-business-gold-receive/components/report-business-gold-receive-sub1/report-business-gold-receive-sub1.component';
import { ReportBusinessGoldReceiveSub2Component } from '../../report/report-business-gold-receive/components/report-business-gold-receive-sub2/report-business-gold-receive-sub2.component';
import { ReportBusinessGoldReceiveComponent } from '../../report/report-business-gold-receive/report-business-gold-receive.component';

import { ReportBusinessNotApproveSub1Component } from '../../report/report-business-not-approve/components/report-business-not-approve-sub1/report-business-not-approve-sub1.component';
import { ReportBusinessNotApproveSub2Component } from '../../report/report-business-not-approve/components/report-business-not-approve-sub2/report-business-not-approve-sub2.component';
import { SearchReportBusinessNotApproveComponent } from '../../report/report-business-not-approve/components/search-report-business-not-approve/search-report-business-not-approve.component';
import { ReportBusinessNotApproveComponent } from '../../report/report-business-not-approve/report-business-not-approve.component';

import { ReportBusinessNotTransferSub1Component } from '../../report/report-business-not-transfer/components/report-business-not-transfer-sub1/report-business-not-transfer-sub1.component';
import { ReportBusinessNotTransferSub2Component } from '../../report/report-business-not-transfer/components/report-business-not-transfer-sub2/report-business-not-transfer-sub2.component';
import { SearchReportBusinessNotTransferComponent } from '../../report/report-business-not-transfer/components/search-report-business-not-transfer/search-report-business-not-transfer.component';
import { ReportBusinessNotTransferComponent } from '../../report/report-business-not-transfer/report-business-not-transfer.component';

import { ReportBusinessNotificationAreaSub1Component } from '../../report/report-business-notification-area/components/report-business-notification-area-sub1/report-business-notification-area-sub1.component';
import { ReportBusinessNotificationAreaSub2Component } from '../../report/report-business-notification-area/components/report-business-notification-area-sub2/report-business-notification-area-sub2.component';
import { ReportBusinessNotificationAreaComponent } from '../../report/report-business-notification-area/report-business-notification-area.component';

import { ReportBusinessUserRemoveSub1Component } from '../../report/report-business-user-remove/components/report-business-user-remove-sub1/report-business-user-remove-sub1.component';
import { ReportBusinessUserRemoveSub2Component } from '../../report/report-business-user-remove/components/report-business-user-remove-sub2/report-business-user-remove-sub2.component';
import { ReportBusinessUserRemoveComponent } from '../../report/report-business-user-remove/report-business-user-remove.component';

import { SearchReportGoldVatApproveComponent } from '../../report/report-gold-vat-approve/components/search-report-gold-vat-approve/search-report-gold-vat-approve.component';
import { ReportGoldVatApproveComponent } from '../../report/report-gold-vat-approve/report-gold-vat-approve.component';

import { NavigationComponent } from '../navigation/navigation.component';
import { Pp013EntryProgramComponent } from '../user-group/components/pp013-entry-program/pp013-entry-program.component';
import { UserGroupComponent } from '../user-group/user-group.component';
import { Pp013userAddComponent } from '../user/components/pp013user-add/pp013user-add.component';
import { UserSearchComponent } from '../user/components/user-search/user-search.component';
import { UserComponent } from '../user/user.component';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
  },
  {
    path: 'entry',
    component: MainPageComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
        children: [
          {
            path: 'search',
            component: UserSearchComponent
          },
          {
            path: 'page-one',
            component: Pp013userAddComponent
          }
        ]
      },
      {
        path:'user-group',
        component:UserGroupComponent,
        children:
        [
          {
            path:'pp013-entry-program',
            component:Pp013EntryProgramComponent,
          }
        ]
      }

    ]
  },
  {
    path: 'report',
    component: MainPageComponent,
    children: [
      {
        path: 'report-business-gold-area',
        component: ReportBusinessGoldAreaComponent,
        children: [
          {
            path: 'page-one',
            component: ReportBusinessGoldAreaSub1Component
          },
          {
            path: 'page-two',
            component: ReportBusinessGoldAreaSub2Component
          },

        ],
      },
      {
        path: 'report-business-gold-receive',
        component: ReportBusinessGoldReceiveComponent,
        children: [
          {
            path: 'page-one',
            component: ReportBusinessGoldReceiveSub1Component
          },
          {
            path: 'page-two',
            component: ReportBusinessGoldReceiveSub2Component
          },

        ],
      },
      {
        path: 'report-business-notification-area',
        component: ReportBusinessNotificationAreaComponent,
        children: [
          {
            path: 'page-one',
            component: ReportBusinessNotificationAreaSub1Component
          },
          {
            path: 'page-two',
            component: ReportBusinessNotificationAreaSub2Component
          },

        ],
      },
      {
        path: 'report-business-user-remove',
        component: ReportBusinessUserRemoveComponent,
        children: [
          {
            path: 'page-one',
            component: ReportBusinessUserRemoveSub1Component
          },
          {
            path: 'page-two',
            component: ReportBusinessUserRemoveSub2Component
          },

        ],
      },
      {
        path: 'report-business-not-transfer',
        component: ReportBusinessNotTransferComponent,
        children: [
          {
            path: 'search',
            component: SearchReportBusinessNotTransferComponent,
          },
          {
            path: 'page-one',
            component: ReportBusinessNotTransferSub1Component,

          }, {
            path: 'page-two',
            component: ReportBusinessNotTransferSub2Component,
          }
        ]

      },
      {
        path: 'report-business-not-approve',
        component: ReportBusinessNotApproveComponent,
        children: [
          {
            path: 'search',
            component: SearchReportBusinessNotApproveComponent,
          },
          {
            path: 'page-one',
            component: ReportBusinessNotApproveSub1Component,

          }, {
            path: 'page-two',
            component: ReportBusinessNotApproveSub2Component,
          }
        ]

      },

      {
        path: 'report-gold-vat-approve',
        component: ReportGoldVatApproveComponent,
        children: [
          {
            path: 'search',
            component: SearchReportGoldVatApproveComponent,
          }
        ]

      },





      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
