import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/sharedService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {
  public service;
userId;
  constructor(private sharedService:SharedService,private routes:Router)
   {
    this.service=sharedService;
    }

  ngOnInit(): void {
    this.userId=this.service.getuserId();
    console.log(this.userId);
    
  }

}
