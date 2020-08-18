import { Component, OnInit } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{Register} from '../models/register';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {VehicleService} from '../services/vehicleService';
import { Vehicle } from '../models/vehicle';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';
import { createLoweredSymbol } from '@angular/compiler';



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
  myDate;
  maxDate=new Date();
  minDate:'1968-08-28';
  
  userId;
  myvehicle:FormGroup;
  constructor(private vehicleService:VehicleService,private routes:Router,private sharedService:SharedService)
   {
    this.service=sharedService;
    this.vehicle=new Vehicle();
    this.error=false;
    this.myDate=new Date();

    
    this.myvehicle=new FormGroup({
      manufacturer:new FormControl(null,[Validators.required]),
      vehiclemodel:new FormControl(null,[Validators.required]),
      drivinglicense:new FormControl(null,[Validators.required]),
      purchasedate:new FormControl(null,[Validators.required]),
      registrationnumber:new FormControl(null,[Validators.required,Validators.minLength(10)]),
      engineno:new FormControl(null,[Validators.required,Validators.minLength(10)]),
      chasisno:new FormControl(null,[Validators.required,Validators.minLength(10)]),
        })
    
    
   }


   public get mf(){
    return this.myvehicle.get('manufacturer');
  }
  public get ln(){
   return this.myvehicle.get('vehiclemodel');
 }
 public get dl(){
   return this.myvehicle.get('drivinglicense');
 }
 public get pd(){
   if(this.myvehicle.get('purchasedate'))
   {
    return this.myvehicle.get('purchasedate');
   }
  
 }
 public get rn(){
   return this.myvehicle.get('registrationnumber');
 }
 public get en(){
   return this.myvehicle.get('engineno');
 }
  public get cn(){
   return this.myvehicle.get('chasisno');
 }

























   insertVehicleDetails()
   {
     

     
    if(this.myvehicle.valid)
    {

      this.vehicle.Manufacturer=this.mf.value;
       this.vehicle.Veh_Model=this.ln.value;
       this.vehicle.Driving_Licence=this.dl.value;
       this.vehicle.Purchase_Date=this.pd.value;
       this.vehicle.Registration_Number=this.rn.value;
       this.vehicle.Engine_No=this.en.value;
       this.vehicle.ChasisNo=this.cn.value;
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

    if(this.result==null)
     {
       this.error=true;
     }
    


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
