import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';

@Component({
  selector: 'app-claimsuccess',
  templateUrl: './claimsuccess.component.html',
  styleUrls: ['./claimsuccess.component.css']
})
export class ClaimsuccessComponent implements OnInit {
  public service;
  userId;

  constructor(private routes:Router,private sharedService:SharedService,)
   {
    this.service=sharedService;
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
  
  }
}
