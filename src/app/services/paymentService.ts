import { Injectable } from "@angular/core";
import { Payment } from '../models/payment'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class PaymentService
{
    
constructor(private http:HttpClient)
{

}


public makePayment(payment:Payment){
    return this.http.post("https://localhost:44308/api/Payment",payment);
}

}