import { Component, ElementRef, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-print-prescription',
  templateUrl: './print-prescription.component.html',
  styleUrls: ['./print-prescription.component.css']
})
export class PrintPrescriptionComponent {

  @Input()screen!: ElementRef;

}
