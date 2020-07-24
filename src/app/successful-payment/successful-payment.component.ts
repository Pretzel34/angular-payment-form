import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-successful-payment',
  templateUrl: './successful-payment.component.html',
  styleUrls: ['./successful-payment.component.css']
})
export class SuccessfulPaymentComponent implements AfterViewInit {

  constructor(public data: DataService, private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1d34b9';
  }

}
