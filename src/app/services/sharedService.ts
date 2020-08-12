import { Injectable } from "@angular/core";

@Injectable()
export class SharedService
{
    public userData;
    public policymoney;
    public userId;
   public vehicleId;
    public allthree:[];
    public IDV_price;
    public Policy_price;
    public Vehicle_Id;
    public paymentData;


public setpaymentDetails(paymentdata)
{
    this.paymentData=paymentdata;
}

public getpaymentDetails()
{
    return this.paymentData;
}


public setAllDetails(allthree)
{
   this.allthree=allthree;
}



public getAllDetails()
{
   return this.allthree;
}



    public setVehicleId(vehicle_Id)
    {
        this.vehicleId=vehicle_Id;
    }

    public getVehicleId()
    {
        return this.vehicleId;
    }

    public setuserData(data)
    {
        this.userData=data;
    }

    public getuserData()
    {
        return this.userData;
    }

    public setuserId(userId)
    {
        this.userId=userId;
    }



    public getuserId()
    {
        return this.userId;
    }

    
}