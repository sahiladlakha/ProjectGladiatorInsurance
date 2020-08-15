import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/loginService';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  login:Login;
  result;
  userDetails;
  public service;
  retypePassword:string;
  counter:number;
  showError:boolean;
  otpvalue;
  userEnteredValue;
  constructor(private loginService:LoginService,private routes:Router,private sharedService:SharedService) 
  { 
    this.service=sharedService;
    this.login=new Login();
    this.counter=1;
    this.showError=false;
    this.otpvalue=1000;
    

  }

  otp()
  {

  }

  resetPassword()
    {
      if(this.retypePassword===this.login.Password && this.otpvalue===this.userEnteredValue)
      {
       this.loginService.resetPassword(this.login).subscribe((data)=>
      {
          this.result=data;

          if(this.result!=null)
          {
            this.service.setuserId(this.result);
            this.routes.navigate(["/userhome"]);
          }


       })
      }

      else {
          this.counter=2;
          if(this.counter===2)
          {
            this.showError=true;
          }
      }
    }


  ngOnInit(): void {

    
  }

}
