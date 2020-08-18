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
  policyId;
  paymentAmount;
  totalIDV;
  vehicleId;
  customerId;
  paymentdetails;
  result;
  error;
  userId;
  
  constructor(private paymentService:PaymentService,private routes:Router,private sharedService:SharedService) 
  
  {
    this.service=sharedService;
    this.payment = new Payment();
    this.payment=new Payment();


   }


   makePayment()
   {
     this.payment.Cust_Id=this.customerId;
     this.payment.Payment_Amount=this.paymentAmount;
     this.payment.Pol_Id=this.policyId;
     
     this.paymentService.makePayment(this.payment).subscribe((data)=>
    {
        this.result=data;

        if(this.result!=null)
        {
          console.log(this.result);
         // this.service.setpaymentDetails(this.result);
         this.service.setfinalDetails(this.result);
          this.routes.navigate(["/card"]);
        }


        else
        {
         this.error=true;
        }


     })




   }






   
  ngOnInit(): void {

    this.userId=this.service.getuserId();
     if(this.userId==null)
    {
          this.routes.navigate(["/userlogin"]);
    }



    this.paymentdetails=this.service.getpaymentDetails();

    

     if(this.paymentdetails==null)
     {
           this.routes.navigate(["/policy"]);
     }


    this.policyId=this.paymentdetails[0];
    this.paymentAmount=this.paymentdetails[1];
    this.totalIDV=this.paymentdetails[2];
    this.vehicleId=this.paymentdetails[3];
    this.customerId=this.paymentdetails[4];

    
    console.log("In end");
    

    
    
  }

}
