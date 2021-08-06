import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedeemCodesRoutingModule } from './redeem-codes-routing.module';
import { RedeemCodesComponent } from './redeem-codes.component';


@NgModule({
  declarations: [RedeemCodesComponent],
  imports: [
    CommonModule,
    RedeemCodesRoutingModule
  ]
})
export class RedeemCodesModule { }
