import { Injectable } from "@angular/core";
import { Claim } from '../models/claim'
import {HttpClient} from '@angular/common/http'


@Injectable()
export class AdminService
{
    
constructor(private http:HttpClient)
{

}


public approveClaim(claim:Claim){
    return this.http.post("https://localhost:44308/api/Claims",claim);
}

public fetchClaimStatus()
{
    return this.http.get("https://localhost:44308/api/AdminLogin");

}

public approveClaims(id){
    return this.http.get("https://localhost:44308/api/ClaimApprove/"+id);
}

public fetchClaimTable()
{
    return this.http.get("https://localhost:44308/api/ClaimApprove");

}


}