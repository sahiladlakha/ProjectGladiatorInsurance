import { Injectable } from "@angular/core";
import { Renew } from '../models/renew'

import {HttpClient} from '@angular/common/http'


@Injectable()
export class RenewService
{
    
constructor(private http:HttpClient)
{

}


public renewMyPolicy(renew:Renew){
    return this.http.post("https://localhost:44308/api/RenewPolicies",renew);
}





}