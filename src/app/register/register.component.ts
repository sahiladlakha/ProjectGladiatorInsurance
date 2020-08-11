import { Component, OnInit } from '@angular/core';
import{Register} from '../models/register';
import {FormGroup,FormControl,Validators} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:Register;
  myregister:FormGroup;
  showDetails:boolean;
  constructor() {
    this.register=new Register();
        this.myregister=new FormGroup({
            firstname:new FormControl(null,[Validators.required,Validators.min(4),Validators.pattern('U00[a-zA-Z 0-9 ]*')]),
            lastname:new FormControl(null,[Validators.required]),
            email:new FormControl(null,[Validators.required,Validators.pattern('U00[a-zA-Z 0-9 ]*')]),
            contact:new FormControl(null,[Validators.required,Validators.min(4)]),
            dob:new FormControl(null,[Validators.required]),
            address:new FormControl(null,[Validators.required]),
            password:new FormControl(null,[Validators.required]),

            })
            this.showDetails=false;
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
          registeruser()
          {
            if(this.myregister.valid)
          {
          //this.showDetails=true;
          //this.login.Username=this.un.value;
          //this.login.Password=this.pw.value;
          this.showDetails=true;
          this.register.Firstname=this.fn.value;
          this.register.Lastname=this.ln.value;
          this.register.Email=this.em.value;
          this.register.Contact=this.con.value;
          this.register.DateofBirth=this.dob.value;
          this.register.Address=this.add.value;
          this.register.Password=this.pw.value;

        }
        // console.log(this.showDetails)
       }
       ngOnInit(): void {
      }
    
          

   }
