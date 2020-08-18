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
showProfile;
showNothing;

  constructor(private routes:Router,private profileService:ProfileService,private sharedService:SharedService)
  {
    this.service=sharedService;
    this.showClaim=false;
    this.showRenewed=false;
    this.showPolicies=false;
    this.claimFound=true;
    this.showNothing=true;
   }


  claimstatus()
  {

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
    this.profileService.fetchClaimDetails(this.userId).subscribe((data)=>
   {
       this.claimStatus=data;
       
       console.log(this.claimStatus);
      

       

    })

    
    if(this.claimStatus)
    {
        this.claimFound=false;
        this.showNothing=false;
    }

    
    
    if(this.userId)
    {
      this.showProfile=true;
    }

    // if(this.userId==null)
    // {
    //   this.routes.navigate(["/userlogin"]);
    // }

  }
  }


