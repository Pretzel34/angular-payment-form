import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentComponent} from './payment/payment.component';
import {SuccessfulPaymentComponent} from './successful-payment/successful-payment.component';


const routes: Routes = [
      { path: 'successful', pathMatch: 'full', component: SuccessfulPaymentComponent },
      { path: 'payment', pathMatch: 'full', component: PaymentComponent },
      { path: '**', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
