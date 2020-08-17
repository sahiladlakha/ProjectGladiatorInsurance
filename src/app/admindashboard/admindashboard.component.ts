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
  declineresult;
  policyTable;
  pendingResult;
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


   fetchPolicyTable()
   {

    this.adminService.fetchPolicyTable().subscribe((data)=>
    {
        this.policyTable=data;
        console.log(this.policyTable);
        if(this.policyTable!=null)
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
          console.log("in");
          this.routes.navigateByUrl('/admindashboard'); 
          this.routes.navigate(["/admindashboard"]);
          window.location.reload();
          
          
        }


     })

    }


      Declineclaim(polid)
    { 
      console.log(polid);

      this.adminService.declineClaims(polid).subscribe((data)=>
    {
        this.declineresult=data;
        console.log(this.declineresult);
        if(this.declineresult!=null)
        {
          console.log("in");
          this.routes.navigate(["/admindashboard"]);
          window.location.reload();
        }


     })
     if(this.declineresult!=null)
        {
          console.log("in");
          this.routes.navigate(["/admindashboard"]);
        }

    }


  ngOnInit(): void {

    this.adminService.fetchClaimStatus().subscribe((data)=>
    {
        this.pendingResult=data;
        console.log(this.pendingResult);
        


     })


  }

}
