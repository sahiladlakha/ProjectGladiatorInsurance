import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  service;
  successDetails;
  carName;
  Manufacturer;
  RegisterationNumber;
  PolicyOwner;
  PolicyId;
  TransactionId;

  constructor(private routes:Router,private sharedService:SharedService) 
  {
    this.service=sharedService;

   }

  ngOnInit(): void {
    this.successDetails=this.service.getfinalDetails();
    this.carName=this.successDetails[0];
    this.Manufacturer=this.successDetails[1];
    this.RegisterationNumber=this.successDetails[2];
    this.PolicyOwner=this.successDetails[3];
    this.PolicyId=this.successDetails[4];
    this.TransactionId=this.successDetails[5];


  }

}
