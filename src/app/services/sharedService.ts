import { Injectable } from "@angular/core";

@Injectable()
export class SharedService
{
    public userData;

    public setuserData(data)
    {
        this.userData=data;
    }

    public getuserData()
    {
        return this.userData;
    }
}