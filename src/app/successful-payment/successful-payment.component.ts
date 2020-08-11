import {AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from '../services/data.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-successful-payment',
  templateUrl: './successful-payment.component.html',
  styleUrls: ['./successful-payment.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SuccessfulPaymentComponent implements OnInit, OnDestroy {

  constructor(public data: DataService, private elementRef: ElementRef, @Inject(DOCUMENT) private newDocument ) { }

  ngOnInit() {
    this.newDocument.body.classList.add('bodybg-color');
    // OR you can Add inline style css with the help of code below
    // this._document.body.style.background = '#fff';
  }
  ngOnDestroy() {
    // remove the class form body tag
    this.newDocument.body.classList.add('bodybg-color');
  }

}
