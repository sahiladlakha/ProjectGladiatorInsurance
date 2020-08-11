import { Injectable } from "@angular/core";
import { Register } from '../models/register'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class RegisterationService
{
    
constructor(private http:HttpClient)
{

}


public insertUser(register:Register){
    return this.http.post("https://localhost:44308/api/tbl_User",register);
}

}