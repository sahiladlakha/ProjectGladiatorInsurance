import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private routes:Router) 
  
  
  { 



  }
  buyInsurance()
  {
  this.routes.navigate(["/vehicle"]);
  }

  ngOnInit(): void {
  }

}
