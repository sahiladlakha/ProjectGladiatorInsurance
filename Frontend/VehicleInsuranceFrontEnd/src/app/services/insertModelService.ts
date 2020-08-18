import { Injectable } from "@angular/core";
import { Login } from '../models/login'
import {HttpClient} from '@angular/common/http'
import { Admin } from '../models/admin'
import { VehicleModel } from "../models/vehiclemodelsinsertion";


@Injectable()

export class InsertModelsService
{
    constructor(private http:HttpClient)
{

}

public insertNewModel(vehicleModel:VehicleModel){
    return this.http.post("https://localhost:44308/api/InsertVehicleModel",vehicleModel);
}


public fetchAllModels(){
    return this.http.get("https://localhost:44308/api/InsertVehicleModel");
}



}
