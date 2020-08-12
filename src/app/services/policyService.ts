import { Injectable } from "@angular/core";
import { Policy } from '../models/policy'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class PolicyService
{
    
constructor(private http:HttpClient)
{

}


public insertPolicy(policy:Policy){
    return this.http.post("https://localhost:44308/api/Policy",policy);
}

}