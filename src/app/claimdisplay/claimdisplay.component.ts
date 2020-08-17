import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import {ProfileService} from '../services/profileService';

import { SharedService } from '../services/sharedService';



@Component({
  selector: 'app-claimdisplay',
  templateUrl: './claimdisplay.component.html',
  styleUrls: ['./claimdisplay.component.css']
})
export class ClaimdisplayComponent implements OnInit {
  public service;
policyDetails;
policyIdForClaim;
renewPolicyDetails;
userId;
result;
claimStatus;
showClaim:boolean;
showRenewed:boolean;
showPolicies:boolean;
claimFound;

  constructor(private routes:Router,private profileService:ProfileService,private sharedService:SharedService)
  {
    this.service=sharedService;
    this.showClaim=false;
    this.showRenewed=false;
    this.showPolicies=false;
    this.claimFound=false;
   }


  claimstatus()
  {

  }


  ngOnInit(): void {
    this.userId=this.service.getuserId();
    this.profileService.fetchClaimDetails(this.userId).subscribe((data)=>
   {
       this.claimStatus=data;
       
       console.log(this.result);
      

       

    })

    if(this.claimStatus!=null)
    {
        this.claimFound=true;
    }

    if(this.claimStatus==null)
    {
        this.claimFound=false;
    }

    // if(this.userId==null)
    // {
    //   this.routes.navigate(["/userlogin"]);
    // }

  }
  }


