import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProfileService} from '../services/profileService';

import { SharedService } from '../services/sharedService';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  error;
  result;
  public service;
  userId;
  result1;

  constructor(private routes:Router,private profileService:ProfileService,private sharedService:SharedService) 
  
  { 

    this.service=sharedService;

  }

  myProfile()
  {
    
    
       
     this.profileService.fetchProfile(this.userId).subscribe((data)=>
     {
         this.result=data;
         console.log("Before Renewing");
         console.log(this.result);
         console.log("Normal Over");
 
         if(this.result!=null)
         {
           this.service.setprofileDatass(this.result);
           //console.log("After setting in userhome")
           //console.log(this.service.getprofileDatass());
           //console.log(this.result);
           this.routes.navigate(["/profile"]);
           
         }

 
 
      })
 
      this.profileService.fetchRenewProfile(this.userId).subscribe((data)=>
    {
        this.result1=data;
        console.log(this.result1);

        if(this.result1!=null)
        {
          this.service.setrenewProfileData(this.result1);
          console.log(this.result1);
        
        }

        console.log("In renew before redirect");
        console.log(this.result);
        if(this.result!=null)
          {
        this.routes.navigate(["/profile"]);
          }

        if(this.result==null)
        {
         this.error=true;
        }


     })
 
 
    }
    logout()
    {
      this.routes.navigate(["/login"]);

    }
    
  


  buyInsurance()
  {
  this.routes.navigate(["/vehicle"]);
  }

  ngOnInit(): void {
    this.userId=this.service.getuserId();
    //console.log(this.userId);

  }

}
