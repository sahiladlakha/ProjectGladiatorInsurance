import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  constructor(private routes:Router) { }



  donePayment()
  {
    this.routes.navigate(["/success"]);
  }
  ngOnInit(): void {
  }

}
