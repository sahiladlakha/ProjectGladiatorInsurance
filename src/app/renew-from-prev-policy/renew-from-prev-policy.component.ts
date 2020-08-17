import { Component, OnInit } from '@angular/core';



import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {FormGroup,FormControl,Validators} from '@angular/forms';
import { RenewFromPrevPolicy } from '../services/renewFromPrevPolicy';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';
import { RenewFromPolicy } from '../models/renewFromPolicy';

@Component({
  selector: 'app-renew-from-prev-policy',
  templateUrl: './renew-from-prev-policy.component.html',
  styleUrls: ['./renew-from-prev-policy.component.css']
})
export class RenewFromPrevPolicyComponent implements OnInit {



  policy:RenewFromPolicy
  public service;
  result;
  error;
  policyId;
  customerId;
  years;


  constructor(private renewfromprev:RenewFromPrevPolicy,private routes:Router,private sharedService:SharedService) 
  
  { 
    this.policy=new RenewFromPolicy();
    this.service=sharedService;

  }


  renewPolicy()
   {
    this.policy.Prev_Policy=this.policyId;

    this.renewfromprev.renewMyPolicy(this.policy).subscribe((data)=>
    {
        this.result=data;

        if(this.result!=null)
        {
          this.service.setpaymentDetails(this.result);
          console.log(this.result);
          console.log(this.service.getpaymentDetails());
         
         this.service.setfinalDetails(this.result);
          this.routes.navigate(["/payment"]);
        }


       


     })

     if(this.result==null)
     {
       this.routes.navigate(["/error"]);
     }

  }

  ngOnInit(): void {


    this.policyId=this.service.getPolicyId();
    this.years=[1,2,3];


  }

}
