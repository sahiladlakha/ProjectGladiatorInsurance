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

  constructor(private routes:Router,private profileService:ProfileService,private sharedService:SharedService) 
  {
    this.service=sharedService;

   }


   renew(policyId)
   {
     
      console.log(policyId);
      this.service.setPolicyIdForClaim(policyId);
      this.policyIdForClaim=this.service.getPolicyIdForClaim();
      console.log(this.policyIdForClaim);
      if(this.policyIdForClaim!=null)
      {

      this.routes.navigate(["/claim"]);
      }
   }

  ngOnInit(): void {

    this.policyDetails=this.service.getprofileDatass();
    //console.log(this.policyDetails);
    this.service.getuserId();

  }

}
