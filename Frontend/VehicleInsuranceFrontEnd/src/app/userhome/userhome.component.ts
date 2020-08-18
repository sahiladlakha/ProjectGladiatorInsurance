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
  showLogin;
  showProfile;
  user2;

  constructor(private routes:Router,private profileService:ProfileService,private sharedService:SharedService) 
  
  { 

    this.service=sharedService;
    this.showProfile=false;

  }

  myProfile()
  {
    if(this.userId==null)
           {
                this.routes.navigate(["/userlogin"]);
           }
    
       
     this.profileService.fetchProfile(this.userId).subscribe((data)=>
     {
         this.result=data;
         console.log("Before Renewing");
         console.log(this.result);
         console.log("Normal Over");

         if(this.userId==null)
           {
                this.routes.navigate(["/userlogin"]);
           }
         if(this.result!=null)
         {
           this.service.setprofileDatass(this.result);
           //console.log("After setting in userhome")
           //console.log(this.service.getprofileDatass());
           //console.log(this.result);
           this.routes.navigate(["/profile"]);
           
         }

 
 
      })
 
    }

      renewInsurance()
  {
    if(this.userId==null)
    {
    this.routes.navigate(["/userlogin"]);
    }

    this.profileService.fetchProfile(this.userId).subscribe((data)=>
     {
         this.result=data;
         console.log("Before Renewing");
         console.log(this.result);
         console.log("Normal Over");

         if(this.userId==null)
           {
                this.routes.navigate(["/userlogin"]);
           }
         if(this.result!=null)
         {
           this.service.setprofileDatass(this.result);
           //console.log("After setting in userhome")
           //console.log(this.service.getprofileDatass());
           //console.log(this.result);
           this.routes.navigate(["/profile"]);
           
         }

 
 
      })
 

  }


  claimInsurance()
  {
    if(this.userId==null)
    {
    this.routes.navigate(["/userlogin"]);
    }

    this.profileService.fetchProfile(this.userId).subscribe((data)=>
     {
         this.result=data;
         console.log("Before Renewing");
         console.log(this.result);
         console.log("Normal Over");

         if(this.userId==null)
           {
                this.routes.navigate(["/userlogin"]);
           }
         if(this.result!=null)
         {
           this.service.setprofileDatass(this.result);
           //console.log("After setting in userhome")
           //console.log(this.service.getprofileDatass());
           //console.log(this.result);
           this.routes.navigate(["/profile"]);
           
         }

 
 
      })
    
  }
    
  estimateCalculation()
  {
    this.routes.navigate(["/estimate"]);
  }
 
    
    logout()
    {
      this.routes.navigate(["/userlogin"]);

    }
    
  

    buyInsurance()
    {
      if(this.userId==null)
      {
      this.routes.navigate(["/userlogin"]);
      }
  
      else{
        this.routes.navigate(["/vehicle"]);
      }
    }



  ngOnInit(): void {
    this.userId=this.service.getuserId();
    console.log(this.userId);
    this.user2=this.service.getuserId();
    console.log(this.user2);

    if(this.userId==null)
    {
      this.showLogin=false;
    }

    if(this.userId!=null)
    {
      this.showProfile=true;
    }

  }

}
