import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ClaimService} from '../services/claimService';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';
import { Claim } from '../models/claim';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  claim:Claim;
  public service;
  result;
  error;
  policyId;
  customerId;
  reasons:string[];
  constructor(private claimService:ClaimService,private routes:Router,private sharedService:SharedService)
   {
      this.claim=new Claim();
      this.service=sharedService;
     

    }


    fileClaim()
    {
      
      //this.claim.Claim_Amount=30000;
      this.claimService.fileClaim(this.claim).subscribe((data)=>
      {
          this.result=data;
          console.log(this.result);
          if(this.result!=null)
          {
            console.log(this.result);
           
           //this.service.setfinalDetails(this.result);
            this.routes.navigate(["/claimsuccess"]);
          }
  
  
          
    
  
  
       })

       if(this.result==null)
       {
        this.routes.navigate(["/error"]);
       }

    }

  ngOnInit(): void {
    this.reasons=['Natural Disaster','Man-Made Diaster','Road Accident','Theft'];
    this.policyId=this.service.getPolicyIdForClaim();
    this.customerId=this.service.getuserId();
    console.log(this.policyId);
    console.log(this.customerId);
      
   this.claim.Customer_Id=this.customerId;
   this.claim.Pol_Id=this.policyId;
   


  }

}
