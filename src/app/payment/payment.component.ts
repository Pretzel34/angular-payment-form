import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SummaryComponent} from './summary/summary.component';

interface  Payment {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
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
  selected = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.acctNumber = 13573;
    this.policyNum = 3010110;
    this.balNum = 80.56;
    this.termDates = '10/09/15 - 10/09/16';
  }

  @Input() openDialog(){
    // obj.action = action;
    const dialogRef = this.dialog.open(SummaryComponent, {
      width: '1000px',
      height: '500px',
      // data: obj
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result.event === 'Add') {
    //     this.addRowData(result.data);
    //   } else if (result.event === 'Update') {
    //     this.updateRowData(result.data);
    //   } else if (result.event === 'Delete') {
    //     this.deleteRowData(result.data);
    //   } else {
    //     return null;
    //   }
    // });
  }

  onSelect() {
    this.validOption = !this.validOption;
  }



}
