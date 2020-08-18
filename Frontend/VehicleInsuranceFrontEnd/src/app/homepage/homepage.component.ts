import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




import {ProfileService} from '../services/profileService';

import { SharedService } from '../services/sharedService';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
userId;
public service;
  constructor(private routes:Router,private sharedService:SharedService)
  {
    this.service=sharedService;
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

  renewInsurance()
  {
    if(this.userId==null)
    {
    this.routes.navigate(["/userlogin"]);
    }

    else 
    {
      this.routes.navigate(["/profile"]);
    }

  }

  claimInsurance()
  {
    if(this.userId==null)
    {
    this.routes.navigate(["/userlogin"]);
    }

    else 
    {
      this.routes.navigate(["/profile"]);
    }
  }

  estimateCalculation()
  {
    this.routes.navigate(["/estimate"]);
  }

  ngOnInit(): void {
    this.userId=this.service.getuserId();
  }

}
