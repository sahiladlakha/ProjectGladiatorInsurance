import { Component, OnInit } from '@angular/core';
import{Register} from '../models/register';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {RegisterationService} from '../services/registerationService'
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:Register;
  myregister:FormGroup;
  showDetails:boolean;
  result;
  dateformat;
  nomatch:boolean;
  constructor(private registerationService:RegisterationService,private routes:Router,public datePipe:DatePipe) {
    this.register=new Register();
        this.myregister=new FormGroup({
            firstname:new FormControl(null,[Validators.required,Validators.min(4)]),
            lastname:new FormControl(null,[Validators.required]),
            email:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z 0-9 @ .]*')]),
            contact:new FormControl(null,[Validators.required,Validators.min(4)]),
            dob:new FormControl(null,[Validators.required]),
            address:new FormControl(null,[Validators.required]),
            password:new FormControl(null,[Validators.required]),
            confirmpassword:new FormControl(null,[Validators.required])

            })
            this.showDetails=false;
            this.nomatch=false;
           }
        
           public get fn(){
             return this.myregister.get('firstname');
           }
           public get ln(){
            return this.myregister.get('lastname');
          }
          public get em(){
            return this.myregister.get('email');
          }
          public get con(){
            return this.myregister.get('contact');
          }
          public get dob(){
            return this.myregister.get('dob');
          }
          public get add(){
            return this.myregister.get('address');
          }
           public get pw(){
            return this.myregister.get('password');
          }


          public get confirmpw(){
            return this.myregister.get('confirmpassword');
          }

          registeruser()
          {


            if(this.pw.value==this.confirmpw.value)
            {


            if(this.myregister.valid)
          {
            this.dateformat=this.datePipe.transform(this.dob.value, 'yyyy/MM/dd');
            console.log(this.dateformat);
          //this.showDetails=true;
          //this.login.Username=this.un.value;
          //this.login.Password=this.pw.value;
          this.showDetails=true;
          this.register.Firstname=this.fn.value;
          this.register.Lastname=this.ln.value;
          this.register.Email=this.em.value;
          this.register.Contact=this.con.value;
          this.register.Date_of_Birth=this.dateformat;
          console.log(this.register.Date_of_Birth);
          this.register.Address=this.add.value;
          this.register.Password=this.pw.value;
            this.registerationService.insertUser(this.register).subscribe((data)=>
              {
                  this.result=data;

                  if(this.result!=null)
                  {
                    this.routes.navigate(["/userlogin"]);
                  }


              })
    }
  }

  else {
    this.nomatch=true;
  }
  }

       
      
       ngOnInit(): void {

        this.nomatch=false;
      }
    
          

   }
