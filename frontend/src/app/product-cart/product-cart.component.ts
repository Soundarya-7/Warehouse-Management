import { Component, OnInit } from '@angular/core';
import { ProductCart } from '../models/product-cart';
import { ProductCartService } from './product-cart.service';
import {location} from '../models/location'
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts'; 

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  productList:ProductCart[] = []
  location: location;
  inboundCount: number = 0;
  outboundCount: number = 0;
  productCount:number = 0;
  InternalRelocationCount: number = 0;
  DamageTransferCount: number = 0;


  constructor(private productCartServices: ProductCartService) { 
  }

  ngOnInit() {
    this.productCartServices.getProductList().subscribe(product => {
      this.productList=product.filter(item => item.location.statusCode=="TEMPORARILY_BLOCKED");
      });
      setInterval(()=>{
        this.productCartServices.getProductList().subscribe(product => {
          this.productList=product.filter(item => item.location.statusCode=="TEMPORARILY_BLOCKED");
          this.updateCounts();
          }
          );
      },1000)
    console.log(this.productList);
  }

  updateCounts(){
    console.log(this.productList)
    this.inboundCount = this.productList.filter(item => item.ledgerMode == "INBOUND").length;
    this.outboundCount = this.productList.filter(item => item.ledgerMode == "OUTBOUND").length;
    this.InternalRelocationCount = this.productList.filter(item => item.ledgerMode == "INTERNAL_MOVEMENT").length;
    this.DamageTransferCount = this.productList.filter(item => item.ledgerMode == "REJECTION_RETURN").length;

  }

  ApprovalAction(ledgerId){
    
    let currentProduct = this.productList.filter(product => product.ledgerId == ledgerId);


    if(currentProduct[0].ledgerMode == "INBOUND" ||
    currentProduct[0].ledgerMode == "INTERNAL_MOVEMENT" || 
    currentProduct[0].ledgerMode =="REJECTION_RETURN")
    {
      currentProduct[0].location.statusCode = "In Transit";
      setTimeout(function(){
        currentProduct[0].location.statusCode = "PERMANENTLY_BLOCKED"
      }, 5000);
      this.updateProductLocationStatus(currentProduct[0].location.locationId, "PERMANENTLY_BLOCKED");
    }

    else if(currentProduct[0].ledgerMode == "OUTBOUND")
    {
      currentProduct[0].location.statusCode = "In Transit";
      setTimeout(function(){
        currentProduct[0].location.statusCode = "DEFAULT"
      }, 5000);
      this.updateProductLocationStatus(currentProduct[0].location.locationId, "DEFAULT");
    }
  }

    updateProductLocationStatus(locationId: number, statusCode: string){
      this.productCartServices.updateLocation(locationId, statusCode).subscribe();
    }



    generatePDF() {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    
      const tableRows = this.productList.map(product => [
        { text: `Product ID: ${product.ledgerId}`, alignment: 'left' }, // Align text to the left
        { text: `Name: ${product.ledgerMode}`, alignment: 'left' }, // Align text to the left
        { text: `Location: ${product.location.description}`, alignment: 'left' } // Align text to the left
      ]);
    
      const documentDefinition = {
        content: [
          { text: 'Product Cart List', style: 'header', alignment: 'center' }, // Align header text to center
          { text: 'Temporary Blocked Products', alignment: 'center' }, // Align section text to center
          {
            table: {
              widths: ['auto', 'auto', 'auto'], // Define column widths
              body: [
                ['Product ID', 'Name', 'Location'], // Table header
                ...tableRows // Table rows
              ]
            }
          }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true
          }
        }
      };
    
      pdfMake.createPdf(documentDefinition).open();
    }
    
    }
  
  
  
