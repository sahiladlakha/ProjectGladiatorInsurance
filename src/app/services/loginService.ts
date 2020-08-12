import { Injectable } from "@angular/core";
import { Login } from '../models/login'
import {HttpClient} from '@angular/common/http'


@Injectable()
export class LoginService
{
    
constructor(private http:HttpClient)
{

}


public login(login:Login){
    return this.http.post("https://localhost:44308/api/Login",login);
}



public adminlogin(login:Login){
    return this.http.post("https://localhost:44308/api/AminLogin",login);
}

}

