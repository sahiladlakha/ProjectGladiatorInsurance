import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{Payment} from '../models/payment';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {PaymentService} from '../services/paymentService';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public service;
  payment:Payment;
  constructor(private paymentService:PaymentService,private routes:Router,private sharedService:SharedService) 
  
  {
    this.service=sharedService;
    this.payment = new Payment();


   }

  ngOnInit(): void {


    console.log(this.service.getpaymentDetails());
  }

}
