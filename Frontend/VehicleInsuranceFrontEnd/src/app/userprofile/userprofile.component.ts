import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {ProfileService} from '../services/profileService';

import { SharedService } from '../services/sharedService';




@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
public service;
policyDetails;
policyIdForClaim;
renewPolicyDetails;
userId;
result;
claimStatus;
showClaim:boolean;

showPolicies:boolean;

  constructor(private routes:Router,private profileService:ProfileService,private sharedService:SharedService) 
  {
    this.service=sharedService;
    this.showClaim=false;
    this.showPolicies=false;
   
    

   }


   claim(policyId)
   {
     
      console.log(policyId);
      this.service.setPolicyIdForClaim(policyId);
      this.service.setPolicyId(policyId);
      this.policyIdForClaim=this.service.getPolicyIdForClaim();
      console.log(this.policyIdForClaim);
      if(this.policyIdForClaim!=null)
      {

      this.routes.navigate(["/claim"]);
      }
   }


   renew(policyId)
   {

    this.service.setPolicyIdForClaim(policyId);
    this.service.setPolicyId(policyId);
    console.log(this.service.getPolicyIdForClaim());
    this.policyIdForClaim=this.service.getPolicyIdForClaim();
    if(this.policyIdForClaim!=null)
      {

      this.routes.navigate(["/renewfromprev"]);
      }

   }

   claimstatus()
   {

    this.profileService.fetchClaimDetails(this.userId).subscribe((data)=>
    {
        this.claimStatus=data;
        
        console.log(this.result);
        if(this.claimStatus)
        {
            this.showClaim=true;
        }



     })

   }

   logout()
    {
      this.routes.navigate(["/userlogin"]);

    }


    home()
    {
      this.routes.navigate(["/userhome"]);

    }
    
   
   buyInsurance()
   {
   this.routes.navigate(["/vehicle"]);
   }




  ngOnInit(): void {

    this.policyDetails=this.service.getprofileDatass();
    console.log(this.policyDetails);
    this.userId=this.service.getuserId();
    
    
    if(this.policyDetails)
    {
      this.showPolicies=true;
    }
    
    
      if(this.userId==null)
      {
          this.routes.navigate(["/userlogin"]);
     }
    }
    



    







  }

  


