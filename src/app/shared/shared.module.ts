import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerPopupComponent } from './locker-popup/locker-popup.component';
import { DiamondPopupComponent } from './diamond-popup/diamond-popup.component';
import { RedeemCodePopupComponent } from './redeem-code-popup/redeem-code-popup.component';



@NgModule({
  declarations: [
    LockerPopupComponent,
    DiamondPopupComponent,
    RedeemCodePopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LockerPopupComponent,
    DiamondPopupComponent,
    RedeemCodePopupComponent
  ]
})
export class SharedModule { }
