import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{Policy} from '../models/policy';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {PolicyService} from '../services/policyService';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  public service;
  result;
  fromVehicle;
  error:boolean;
  types:string[];
  countries;
  years;
  priceShow:boolean;
  policy:Policy;
  customerId;
  userId;
  mypolicy:FormGroup;
  constructor(private policyService:PolicyService,private routes:Router,private sharedService:SharedService)
   
  {

    this.priceShow=false;
    this.service=sharedService;
    this.policy=new Policy();
    this.error=false;
   // this.types=['Third Party Liability','Comprehensive'];
   this.mypolicy=new FormGroup({
    policyduration:new FormControl(null,[Validators.required]),
    policytype:new FormControl(null,[Validators.required]),
  })
    
    

   }

   public get pt(){
    return this.mypolicy.get('policytype');
  }
  public get pd(){
   return this.mypolicy.get('policyduration');
 }
  

   
   generatePolicyDetails()
   {
    if(this.mypolicy.valid)
    {
      this.policy.Policy_Type=this.pt.value;
      this.policy.Duration=this.pd.value;
    
      console.log(this.policy);
    this.policyService.insertPolicy(this.policy).subscribe((data)=>
    {
        this.result=data;

        if(this.result!=null)
        {
          console.log(this.result);
          this.service.setpaymentDetails(this.result);
          this.routes.navigate(["/payment"]);
        }


        


     })
     if(this.result==null)
        {
         this.error=true;
        }
    }



   }





   checkData()
   {
    this.fromVehicle=this.service.getAllDetails();
    this.policy.Total_IDV=this.fromVehicle[0];
    this.policy.Policy_Amount=this.fromVehicle[1];
    this.policy.Veh_Id =this.fromVehicle[2];
    console.log(this.policy.Total_IDV);
    console.log(this.policy.Policy_Amount);
    console.log(this.policy.Veh_Id);
   }



  ngOnInit(): void {
    this.types=['Third Party','Comprehensive'];
    this.years=[1,2,3];

    this.userId=this.service.getuserId();
     if(this.userId==null)
     {
          this.routes.navigate(["/userlogin"]);
     }
    console.log(this.fromVehicle=this.service.getVehicleId());

    
    if(this.fromVehicle==null)
    {
         this.routes.navigate(["/vehicle"]);
    }

    this.policy.Total_IDV=this.fromVehicle[0];
     this.policy.Policy_Amount=this.fromVehicle[1];
    this.policy.Veh_Id =this.fromVehicle[2];
    this.policy.Cust_Id=this.fromVehicle[3];
    


    //console.log(this.policy.Total_IDV);
  // console.log(this.policy.Policy_Amount);
    // console.log(this.policy.Veh_Id);

  }

}
