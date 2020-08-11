import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SummaryComponent} from './summary/summary.component';
import {DataService} from '../services/data.service';
// import * as _moment from 'moment';
// import {default as _rollupMoment, Moment} from 'moment';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// const moment = _rollupMoment || _moment

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY'
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

interface  Payment {
  value: string;
  viewValue: string;
}

export interface UsersData {
  acctNumber: number;
  policyNum: number;
  balNum: number;
  termDates: any;
  expMonth: any;
  expYear: any;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  country: any;
  phone: number;
  email: any;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

// providers: [
  //   {
  //     provide: DateAdapter,
  //     useClass: MomentDateAdapter,
  //     deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  //   },
//
//     {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
//   ]
// })

export class PaymentComponent implements OnInit {
  payments: Payment[] = [
    {value: 'credit', viewValue: 'Credit'},
    {value: 'paypal', viewValue: 'PayPal'},
    {value: 'debit', viewValue: 'Debit'},
  ];

  acctNumber: number;
  policyNum: number;
  balNum: number;
  termDates: any;

  validOption: boolean;
  // selected = '';

  constructor(public dialog: MatDialog, public data: DataService) { }

  ngOnInit() {
    this.data.acctNumber = 13573;
    this.data.policyNum = 3010110;
    this.data.balNum = 80.56;
    this.data.termDates = '10/09/15 - 10/09/16';
    this.data.selected = '';

  }

  @Input() openDialog(){
    const dialogRef = this.dialog.open(SummaryComponent, {
      width: '1000px',
      height: '500px',
      // data: obj
    });
  }

  onSelect() {
    this.validOption = !this.validOption;
  }



}
