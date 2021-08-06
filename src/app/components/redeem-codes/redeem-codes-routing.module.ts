import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemCodesComponent } from './redeem-codes.component';

const routes: Routes = [
  {
    path: '',
    component: RedeemCodesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedeemCodesRoutingModule { }
