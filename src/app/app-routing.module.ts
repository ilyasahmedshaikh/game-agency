import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./components/store/store.module').then(m => m.StoreModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'offer',
    loadChildren: () => import('./components/offer/offer.module').then(m => m.OfferModule)
  },
  {
    path: 'redeem-codes',
    loadChildren: () => import('./components/redeem-codes/redeem-codes.module').then(m => m.RedeemCodesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
