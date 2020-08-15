import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { Router } from '@angular/router';
import { SharedService } from '../services/sharedService';
import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas'; 


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
   dataforpdf;

  constructor(private routes:Router,private sharedService:SharedService) 
  {
    this.service=sharedService;
    

   }

   
   generatePdf(){
    // const documentDefinition = { content: this.dataforpdf };
    // pdfMake.createPdf(document.getElementById('this.dataforpdf')).open();
    
    var generatePDF = function() {
      kendo.drawing.drawDOM($("#formConfirmation")).then(function(group) {
        kendo.drawing.pdf.saveAs(group, "Converted PDF.pdf");
      });
    }
    


   }
  

  ngOnInit(): void {
    this.successDetails=this.service.getfinalDetails();
    this.carName=this.successDetails[0];
    this.Manufacturer=this.successDetails[1];
    this.RegisterationNumber=this.successDetails[2];
    this.PolicyOwner=this.successDetails[3];
    this.PolicyId=this.successDetails[4];
    this.TransactionId=this.successDetails[5];

    this.dataforpdf[0]=this.carName;
    this.dataforpdf[1]=this.Manufacturer;
    this.dataforpdf[2]=this.RegisterationNumber;
    this.dataforpdf[3]=this.PolicyOwner;
    this.dataforpdf[4]=this.PolicyId;
    this.dataforpdf[5]=this.successDetails;

  }

}
