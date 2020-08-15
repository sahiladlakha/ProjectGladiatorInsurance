import { Injectable } from "@angular/core";
import { Estimate } from '../models/estimate'
import {HttpClient} from '@angular/common/http'
@Injectable()

export class EstimateService
{
    constructor(private http:HttpClient)
{

}

public checkEstimate(estimate:Estimate){
    return this.http.post("https://localhost:44308/api/Estimate",estimate);
}



}
