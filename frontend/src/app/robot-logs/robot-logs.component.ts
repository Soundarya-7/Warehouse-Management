import { Component, OnInit } from '@angular/core';
import { RobotLogsService } from './robot-logs.service';
import {Router, ActivatedRoute} from '@angular/router'
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
 
@Component({
  selector: 'app-robot-logs',
  templateUrl: './robot-logs.component.html',
  styleUrls: ['./robot-logs.component.css']
})
export class RobotLogsComponent implements OnInit {
  robotList = [];
  constructor(private robotLogsService: RobotLogsService, private activatedRoute: ActivatedRoute) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.robotLogsService.getRobotLogsList().subscribe(robotList => {
      this.robotList = robotList.filter(i => i.robot.id == id)})
  }
  generatePDF() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  
    // Create table rows
    const tableRows = this.robotList.map(log => [
      { text: log.startTime, alignment: 'left' }, // Align text to the left
      { text: log.endTime, alignment: 'left' }, // Align text to the left
      { text: log.accessedLocationID, alignment: 'left' } // Align text to the left
    ]);
  
    const documentDefinition = {
      content: [
        { text: 'Robot Logs', style: 'header', alignment: 'center' }, // Align header text to center
        { text: 'Robot ID: ' + this.robotList[0].id, alignment: 'center' }, // Align robot ID text to center
        {
          table: {
            widths: ['auto', 'auto', 'auto'], // Define column widths
            body: [
              ['Start Time', 'End Time', 'Accessed Location ID'], // Table header
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