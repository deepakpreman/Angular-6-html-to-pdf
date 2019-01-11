import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as saveAs from 'file-saver'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  downloadPdf(){
    var data = document.getElementById('container'); 
    html2canvas(data).then(canvas => { 
    var imgWidth = 208; 
    var imgHeight = canvas.height * imgWidth / canvas.width;    
    const contentDataURL = canvas.toDataURL('image/png') 
    let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF 
    var position = 10; 
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)     
    pdf.save('htmltopdf.pdf'); // Generated PDF  
    })
  }
}
 
