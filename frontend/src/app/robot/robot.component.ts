import { Component, OnInit } from '@angular/core';
import { RobotService } from './robot.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts'; 


@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})
export class RobotComponent implements OnInit {
  robotList: any[] = [];
  constructor(private robotService: RobotService) { }
 
ngOnInit(){
  this.robotService.getRobotList().subscribe(robot => this.robotList = robot);
}
 

generatePDF() {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  // Create table rows
  const tableRows = this.robotList.map(robot => [
    { text: robot.id, alignment: 'left' }, // Align text to the left
    { text: robot.maxCapacity.toString(), alignment: 'center' }, // Align text to the center
    { text: robot.currentStatus, alignment: 'right' } // Align text to the right
  ]);

  const documentDefinition = {
    content: [
      { text: 'List of Robots', style: 'header' },
      {
        table: {
          widths: ['auto', 'auto', 'auto'], // Define column widths
          body: [
            ['Robot ID', 'Maximum Capacity', 'Current Status'], // Table header
            ...tableRows // Table rows
          ]
        }
      }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: 'center' // Align header text to center
      }
    }
  };

  pdfMake.createPdf(documentDefinition).open();
}
}
 
