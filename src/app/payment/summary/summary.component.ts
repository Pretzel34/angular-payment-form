import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PaymentComponent} from '../payment.component';
import {DataService} from '../../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})


export class SummaryComponent implements OnInit {

  @Input() localData: any;


  constructor(public dialogRef: MatDialogRef<SummaryComponent>, public data: DataService, public router: Router){

  }

  ngOnInit(): void {
  }

  submit() {
    this.dialogRef.close();
  }

}
