import { Component, OnInit } from '@angular/core';


import { VehicleModel } from '../models/vehiclemodelsinsertion';
import {InsertModelsService} from '../services/insertModelService';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';


@Component({
  selector: 'app-insert-vehicle-model',
  templateUrl: './insert-vehicle-model.component.html',
  styleUrls: ['./insert-vehicle-model.component.css']
})
export class InsertVehicleModelComponent implements OnInit {

  vehicleModel:VehicleModel;
  public service;
  details;
  result;
  allModels;
  Done:boolean;
  adminEmail;

  constructor(private vehicleService:InsertModelsService,private routes:Router,private sharedService:SharedService)  
  {
    this.vehicleModel = new VehicleModel();
    
    this.details=true;
    
    this.service=sharedService;
    this.Done=false;

   }

    insertModel()
    {
      this.vehicleService.insertNewModel(this.vehicleModel).subscribe((data)=>
    {
      this.result=data;
      console.log(this.result);
     
      
      if(this.result!=null)
      {
        this.Done=true;
      }
      

    })
    }

    admindashboard()
    {
      
      this.routes.navigate(["/admindashboard"]);
    }




    fetchModels()
    {
      this.vehicleService.fetchAllModels().subscribe((data)=>
    {
      this.allModels=data;
      console.log(this.allModels);
     
      
      if(this.allModels!=null)
      {
        this.details=true;
      }
      

    })
    }


    
  ngOnInit(): void {

    this.adminEmail=this.service.getadminEmail();
    if(this.adminEmail==null)
    {
      this.routes.navigate(["/adminlogin"]);
    }

    

  }

}
