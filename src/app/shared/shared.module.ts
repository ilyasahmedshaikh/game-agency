import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerPopupComponent } from './locker-popup/locker-popup.component';
import { DiamondPopupComponent } from './diamond-popup/diamond-popup.component';



@NgModule({
  declarations: [
    LockerPopupComponent,
    DiamondPopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LockerPopupComponent,
    DiamondPopupComponent
  ]
})
export class SharedModule { }
