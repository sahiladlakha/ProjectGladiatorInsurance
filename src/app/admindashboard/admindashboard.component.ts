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
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  result;
  result1;
  constructor(private adminService:AdminService,private routes:Router,private sharedService:SharedService) 
  {


   }




   fetchClaimTable()
   {

    this.adminService.fetchClaimTable().subscribe((data)=>
    {
        this.result1=data;
        console.log(this.result1);
        if(this.result1!=null)
        {
          
          
        }


     })

   }
   Approveclaim(polid)
    {

      this.adminService.approveClaims(polid).subscribe((data)=>
    {
        this.result=data;
        console.log(this.result);
        if(this.result!=null)
        {
          
          
        }


     })

    }



  ngOnInit(): void {

    this.adminService.fetchClaimStatus().subscribe((data)=>
    {
        this.result=data;
        console.log(this.result);
        if(this.result!=null)
        {
          
          
        }


     })


  }

}
