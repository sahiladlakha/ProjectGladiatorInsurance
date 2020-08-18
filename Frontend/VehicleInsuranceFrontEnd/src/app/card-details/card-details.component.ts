import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';
import {FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
userId;
mycard:FormGroup;
public service;
  constructor(private routes:Router,private sharedService:SharedService) 
  {
    this.service=sharedService;
    this.mycard=new FormGroup({
      name:new FormControl(null,[Validators.required,Validators.min(2)]),
      number:new FormControl(null,[Validators.required,Validators.min(89000)]),
      month:new FormControl(null,[Validators.required,Validators.min(1),Validators.max(12)]),
      year:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.min(1962),Validators.max(2040)]),
      cvv:new FormControl(null,[Validators.required,Validators.min(1)]),
      
      
      })
   }

   public get name(){
    return this.mycard.get('name');
  }
  public get number(){
   return this.mycard.get('number');
 }
 public get month(){
   return this.mycard.get('month');
 }
 public get year(){
   return this.mycard.get('year');
 }
 public get cvv(){
   return this.mycard.get('cvv');
 }

 

 

  donePayment()
  {
    console.log("Payment");
    if(this.mycard.valid)
    {
      console.log("valid");
     this.routes.navigate(["/success"]);
  }
}
  ngOnInit(): void {
     this.userId=this.service.getuserId();
     if(this.userId==null)
     {
          this.routes.navigate(["/userlogin"]);
    }

    
  }

}
