import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{Register} from '../models/register';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {LoginService} from '../services/loginService';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  login:Login;
  result;
  userDetails;
  public service;
  showError;
  constructor(private loginService:LoginService,private routes:Router,private sharedService:SharedService) 
  {
    this.service=sharedService;
    this.login=new Login();
    this.showError=false;
    //console.log(this.service.getuserData());
   }

    userLogin()
    {
      

       this.loginService.login(this.login).subscribe((data)=>
      {
          this.result=data;
          console.log("In user login");
          if(this.result!=null)
          {
            
            this.service.setuserId(this.result);
            this.routes.navigate(["/userhome"]);
          }

         

       })

       if(this.result==null)
       {
        this.showError=true;
       }
    }


   

  ngOnInit(): void {

    this.userDetails=this.service.getuserData();
      this.login.Email=this.userDetails.Email;
      this.login.Password=this.userDetails.Password;
  }

}
