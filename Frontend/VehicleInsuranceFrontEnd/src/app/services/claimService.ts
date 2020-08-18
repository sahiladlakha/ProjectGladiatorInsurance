import { Injectable } from "@angular/core";
import { Claim } from '../models/claim'
import {HttpClient} from '@angular/common/http'


@Injectable()
export class ClaimService
{
    
constructor(private http:HttpClient)
{

}


public fileClaim(claim:Claim){
    return this.http.post("https://localhost:44308/api/Claims",claim);
}





}