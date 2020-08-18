import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/sharedService';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public service;
userDetails;

  constructor(private sharedService:SharedService) 
  { 
    this.service=sharedService;
  }

  ngOnInit(): void {
    this.userDetails=this.service.getuserId();
    console.log(this.userDetails);
  }

}
