import { Injectable } from "@angular/core";
import { Vehicle } from '../models/vehicle'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class VehicleService{

constructor(private http:HttpClient)
{

}



public insertVehicle(vehicle:Vehicle){
    return this.http.post("https://localhost:44308/api/Vehicle",vehicle);
}



public fetchModels(){
    return this.http.get("https://localhost:44308/api/VehiclePrice");
}

}