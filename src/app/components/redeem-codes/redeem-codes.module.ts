import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedeemCodesRoutingModule } from './redeem-codes-routing.module';
import { RedeemCodesComponent } from './redeem-codes.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [RedeemCodesComponent],
  imports: [
    CommonModule,
    RedeemCodesRoutingModule,
    SharedModule
  ]
})
export class RedeemCodesModule { }
