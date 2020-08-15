import { Component, OnInit } from '@angular/core';
import { EstimateService } from '../services/estimateService';
import { Estimate } from '../models/estimate';
import {VehicleService} from '../services/vehicleService';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';
@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {


estimate:Estimate;
result;

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

   }

    loginpage()
    {

    }

   checkEstimate()
   {
     
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



  ngOnInit(): void {

    this.vehicleService.fetchModels().subscribe((data)=>
    {
         this.models=data;
    })
    console.log(this.models);

    this.userId=this.service.getuserId();
    



  }

  }


