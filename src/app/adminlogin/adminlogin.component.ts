import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{Register} from '../models/register';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {LoginService} from '../services/loginService';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin:Admin;
  result;
  constructor(private loginService:LoginService,private routes:Router,private sharedService:SharedService)
  {

    this.admin=new Admin();
   }



   adminLogin()
    {
      

       this.loginService.adminlogin(this.admin).subscribe((data)=>
      {
          this.result=data;

          if(this.result!=null)
          {
            
            this.routes.navigate(["/admindashboard"]);
          }


       })
    }


  ngOnInit(): void {
  }

}
