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
  userId;
  myclaim:FormGroup;
  constructor(private claimService:ClaimService,private routes:Router,private sharedService:SharedService)
   {
      this.claim=new Claim();
      this.service=sharedService;
      this.myclaim=new FormGroup({
        policynumber:new FormControl(null,[Validators.required]),
        claimmobilenumber:new FormControl(null,[Validators.required,Validators.min(4)]),
        claimreasons:new FormControl(null,[Validators.required]),
      })

    }

    public get pn(){
      return this.myclaim.get('policynumber');
    }
    public get cn(){
     return this.myclaim.get('claimmobilenumber');
   }
   public get cr(){
     return this.myclaim.get('claimreasons');
   }

    fileClaim()
    {
      if(this.myclaim.valid)
      {
            this.claim.Pol_Id=this.pn.value;
            this.claim.Mobile_No=this.cn.value;
            this.claim.Reason_of_Claim=this.cr.value;
      
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
      

    }


    myProfile()
{
            if(this.userId==null)
           {
                this.routes.navigate(["/userlogin"]);
           }


           
           if(this.userId!=null)
           {
                this.routes.navigate(["/profile"]);
           }
    
       
     
 
    }


  ngOnInit(): void {

    this.userId=this.service.getuserId();
     if(this.userId==null)
     {
          this.routes.navigate(["/userlogin"]);
     }
    this.reasons=['Natural Disaster','Man-Made Diaster','Road Accident','Theft'];
    this.policyId=this.service.getPolicyIdForClaim();
    this.customerId=this.service.getuserId();
    console.log(this.policyId);
    console.log(this.customerId);
      
   this.claim.Customer_Id=this.customerId;
   this.claim.Pol_Id=this.policyId;
   


  }

}
