import { Injectable, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 

@Injectable({
  providedIn: 'root'
})
export class PrintDownloadService {
  constructor() { }

  
  print(screen: ElementRef){
    html2canvas(screen.nativeElement).then(canvas => {
      let imgWidth = 208;   
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf');
    });
  }
}
