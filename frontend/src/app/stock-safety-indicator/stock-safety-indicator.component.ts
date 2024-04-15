import { Component, OnInit } from '@angular/core';
import {StockSafetyIndicator} from '../models/stock-safety-indicator'
import { StockSafetyIndicatorService } from './stock-safety-indicator.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts'; 



@Component({
  selector: 'app-stock-safety-indicator',
  templateUrl: './stock-safety-indicator.component.html',
  styleUrls: ['./stock-safety-indicator.component.css']
})
export class StockSafetyIndicatorComponent implements OnInit {

  items: StockSafetyIndicator [] =[] ;
  users : any = [];
  userType : string ;

  

 

  constructor(private stockSaftyIndicatorServices:StockSafetyIndicatorService) { 

   this.users= JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):{};
   this.userType = this.users.userType;
  }


  ngOnInit() {
    this.fetchItems();
  
  }

  

  fetchItems(){

    this.stockSaftyIndicatorServices.getStocksThresholdItems().subscribe(items =>{
      this.items = items.sort((a : any, b: any) => a.currentStock - b.currentStock);
      this.items.forEach(item =>{
        item.status="Pending"
      })
    })

  }


  generatePDF() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const tableRows = this.items.map(item => [
    { text: item.productId, alignment: 'left' }, // Align text to the left
    { text: item.name, alignment: 'left' }, // Align text to the left
    { text: item.currentStock.toString(), alignment: 'right' } // Align text to the right
  ]);

  const documentDefinition = {
    content: [
      { text: 'Safety Stock list', style: 'header' },
      {
        table: {
          widths: ['auto', '*', 'auto'], // Define column widths
          body: [
            ['Product ID', 'Product Name', 'Total Stock'], // Table header
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
