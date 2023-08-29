import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangesByStaffComponent } from './changes-by-staff/changes-by-staff.component';
import { ConsiderRequestSbtComponent } from './consider-request-sbt/consider-request-sbt.component';
import { ConsiderRequestVatComponent } from './consider-request-vat/consider-request-vat.component';

const routes: Routes = [
  {
    path: 'vat',
    component: ConsiderRequestVatComponent
  },
  {
    path: 'sbt',
    component: ConsiderRequestSbtComponent
  },
  {
    path: 'changes-by-staff',
    component: ChangesByStaffComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsiderRequestRoutingModule { }
