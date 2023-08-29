import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtappComponent } from './extapp.component';

const routes: Routes = [
  {
    path: '',
    component: ExtappComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtappRoutingModule { }
