import { Component, OnInit } from '@angular/core';
import { EstimateService } from '../services/estimateService';
import { Estimate } from '../models/estimate';
import {VehicleService} from '../services/vehicleService';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {


estimate:Estimate;
result;
myestimate:FormGroup;
fourWheeler:boolean;
details:boolean;
policyPrice:number;
totalInsuredValue:number;
showestimate:boolean;
models;
userId;
public service;
  constructor(private estimateService:EstimateService,private vehicleService:VehicleService,private routes:Router,private sharedService:SharedService) 
  {

    this.estimate = new Estimate();
    this.fourWheeler=true;
    this.details=true;
    this.showestimate=false;
    this.service=sharedService;
    this.myestimate=new FormGroup({
      vehiclemodel:new FormControl(null,[Validators.required]),
      
      policyduration:new FormControl(null,[Validators.required]),
   })
  }

  public get ln(){
    return this.myestimate.get('vehiclemodel');
  }
  
 public get pd(){
  return this.myestimate.get('policyduration');
}

    loginpage()
    {
        
      if(this.userId!=null)
      {
           this.routes.navigate(["/userhome"]);
      }

      if(this.userId==null)
      {
           this.routes.navigate(["/userlogin"]);
      }
    }

   checkEstimate()
   {
    
    

    if(this.myestimate.valid)
    {
      console.log("valid");
    this.showestimate=true;
   this.estimate.Vehicle_Model=this.ln.value;
   this.estimate.Vehicle_Age=this.pd.value;
     
    this.estimateService.checkEstimate(this.estimate).subscribe((data)=>
    {
      this.result=data;
      console.log(this.result);
      this.totalInsuredValue=this.result[0];
      this.policyPrice=this.result[1];
      if(this.result!=null)
      {
        this.showestimate=true;
      }
      

    })
  }
    }



  ngOnInit(): void {

    this.vehicleService.fetchModels().subscribe((data)=>
    {
         this.models=data;
    })
    console.log(this.models);

    this.userId=this.service.getuserId();
    



  }

  }


