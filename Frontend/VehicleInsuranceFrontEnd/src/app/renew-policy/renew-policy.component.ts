import { Component, OnInit } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {FormGroup,FormControl,Validators} from '@angular/forms';
import { RenewService } from '../services/renewService';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';
import { Renew } from '../models/renew';

@Component({
  selector: 'app-renew-policy',
  templateUrl: './renew-policy.component.html',
  styleUrls: ['./renew-policy.component.css']
})
export class RenewPolicyComponent implements OnInit {


  renew:Renew;
  public service;
  result;
  error;
  policyId;
  customerId;
  years;


  constructor(private renewService:RenewService,private routes:Router,private sharedService:SharedService) 
  {
    this.renew=new Renew();
    this.service=sharedService;

   }


   renewPolicy()
   {
    this.renew.previousPolicyId=this.policyId;

    this.renewService.renewMyPolicy(this.renew).subscribe((data)=>
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


        else
        {
         this.error=true;
        }


     })

  }


  renewnewPolicy()
   {
    this.renew.previousPolicyId=this.policyId;

    this.renewService.renewMyPolicy(this.renew).subscribe((data)=>
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


        else
        {
         this.error=true;
        }


     })

  }




   

  ngOnInit(): void {

    this.policyId=this.service.getPolicyId();
    this.years=[1,2,3];
  }

}
