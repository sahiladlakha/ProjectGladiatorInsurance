import { Component, OnInit } from '@angular/core';

import { Admin } from '../models/admin';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{Register} from '../models/register';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {AdminService} from '../services/adminService';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';

@Component({
  selector: 'app-fetch-claims',
  templateUrl: './fetch-claims.component.html',
  styleUrls: ['./fetch-claims.component.css']
})
export class FetchClaimsComponent implements OnInit {
  public service;
  result;
  adminEmail;

  constructor(private adminService:AdminService,private routes:Router,private sharedService:SharedService)
  {
    this.service=sharedService;

  }


  

  ngOnInit(): void {
    

    this.adminEmail=this.service.getadminEmail();
    if(this.adminEmail==null)
    {
      this.routes.navigate(["/adminlogin"]);
    }



    this.adminService.fetchClaimTable().subscribe((data)=>
    {
        this.result=data;
        //console.log(this.result);
        if(this.result!=null)
        {
          
          
        }


     })


  }

}
