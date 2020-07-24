import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  acctNumber: number;
  policyNum: number;
  balNum: number;
  termDates: any;
  cardNum: number;
  verfNum: number;
  expMonth: any;
  expYear: any;
  firstName: string;
  lastName: string;
  address: any;
  addressTwo: any
  city: string;
  state: string;
  zip: number;
  country: any;
  phone: number;
  email: any;

  selected: string;

  constructor() { }
}
