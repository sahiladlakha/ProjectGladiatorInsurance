import { Injectable } from "@angular/core";
import { Claim } from '../models/claim'
import { Admin } from '../models/admin'
import {HttpClient} from '@angular/common/http'


@Injectable()
export class AdminService
{
    
constructor(private http:HttpClient)
{

}





public fetchClaimStatus()
{
    return this.http.get("https://localhost:44308/api/AdminLogin");

}

public approveClaims(id){
    return this.http.get("https://localhost:44308/api/ClaimApprove/"+id);
}



public declineClaims(id){
    return this.http.get("https://localhost:44308/api/AdminLogin/"+id);
}


public fetchClaimTable()
{
    return this.http.get("https://localhost:44308/api/Claims");

}


public fetchPolicyTable()
{
    return this.http.get("https://localhost:44308/api/PoliciesRenewFromPrev");

}


}