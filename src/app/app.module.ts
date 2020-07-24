import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { SummaryComponent } from './payment/summary/summary.component';
import { SuccessfulPaymentComponent } from './successful-payment/successful-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    SummaryComponent,
    SuccessfulPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule, MatCheckboxModule, NoopAnimationsModule, MatRadioModule, MatIconModule, MatSelectModule, MatButtonModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
