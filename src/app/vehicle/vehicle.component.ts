import { Component, OnInit } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{Register} from '../models/register';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {VehicleService} from '../services/vehicleService';
import { Vehicle } from '../models/vehicle';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';



@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public service;
  vehicle:Vehicle;
  result;
  models;
  error:boolean;
  userId;
  
  constructor(private vehicleService:VehicleService,private routes:Router,private sharedService:SharedService)
   {
    this.service=sharedService;
    this.vehicle=new Vehicle();
    this.error=false;
    
   }


   insertVehicleDetails()
   {
      console.log(this.vehicle);
    this.vehicleService.insertVehicle(this.vehicle).subscribe((data)=>
    {
        this.result=data;

        if(this.result!=null)
        {
          this.service.setVehicleId(this.result);
          console.log(this.result);
          this.routes.navigate(["/policy"]);
        }


        else
        {
         this.error=true;
        }


     })




   }

   getId()
   {
    this.userId=this.service.getuserId();
    this.vehicle.Cust_Id=this.userId;
    console.log(this.vehicle.Cust_Id);
   }

    

  //  fetchModels()
  //  {
  //   this.vehicleService.fetchModels().subscribe((data)=>
  //   {
  //        this.models=data;
  //   })
  //   console.log(this.models);
  //  }

  ngOnInit(): void {


    this.vehicleService.fetchModels().subscribe((data)=>
    {
         this.models=data;
    })
    console.log(this.models);

    this.userId=this.service.getuserId();
    this.vehicle.Cust_Id=this.userId;
    console.log(this.vehicle.Cust_Id);

    
       
        if(this.userId==null)
           {
                this.routes.navigate(["/userlogin"]);
           }



  }

}
