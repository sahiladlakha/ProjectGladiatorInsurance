import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/loginService';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';
import {FormGroup,FormControl,Validators} from '@angular/forms';

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
  mylogin:FormGroup;
  constructor(private loginService:LoginService,private routes:Router,private sharedService:SharedService) 
  { 
    this.service=sharedService;
    this.login=new Login();
    this.counter=1;
    this.showError=false;
    this.otpvalue=1000;

    this.mylogin=new FormGroup({
      password:new FormControl(null,[Validators.required,Validators.minLength(7)]),
     // email:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z 0-9 @ .]*')]),
      em:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z 0-9 @ .]*')]),
      confirmpw:new FormControl(null,[Validators.required,Validators.minLength(7)]),
      otp:new FormControl(null,[Validators.required,Validators.minLength(4)])
   // console.log(this.service.getuserData());
   // console.log(this.service.getuserData());
  })

  }

  public get otp(){
    return this.mylogin.get('otp');
  }
  public get confirmpw(){
    return this.mylogin.get('confirmpw');
  }

  public get pd(){
    return this.mylogin.get('password');
   }
 
   public get em(){
     return this.mylogin.get('em');
   }

   sendOtp()
   {

   }
  
  resetPassword()
    {
      if(this.mylogin.valid)
      {
        console.log("In re");
        console.log(this.pd.value);
        console.log(this.confirmpw.value);
        console.log("In re");

      if(this.pd.value===this.confirmpw.value && this.otpvalue===this.otp.value)
      {
        console.log("more in");
        this.login.Email=this.em.value;
        this.login.Password=this.pd.value;
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
  }

  ngOnInit(): void {

    
  }

}
