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

  constructor(private routes:Router,private profileService:ProfileService,private sharedService:SharedService) 
  
  { 

    this.service=sharedService;

  }

  myProfile()
  {
    
    
       
     this.profileService.fetchProfile(this.userId).subscribe((data)=>
     {
         this.result=data;
 
         if(this.result!=null)
         {
           this.service.setprofileDatass(this.result);
           //console.log("After setting in userhome")
           //console.log(this.service.getprofileDatass());
           //console.log(this.result);
           this.routes.navigate(["/profile"]);
         }
 
 
         else
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
