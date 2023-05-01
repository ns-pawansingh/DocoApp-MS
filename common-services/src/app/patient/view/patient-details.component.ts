import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Patient, PatientHistory, PatientMedicine } from '../patient-search.component';
import { PrintDownloadService } from 'src/app/print/print-download.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {
  constructor(private downloadAndPrintService: PrintDownloadService){}
  medicneForSearch: string = '';
  addNewMedicine = false;
  newPrescribedMedicines: PatientMedicine[] = [];
  today = new Date();
  showNewPresc = false;
  @Input()
  currentPatient!: Patient

  @Input()
  selectedHistory!: PatientHistory;

  @Output()
  addNewPrescriptions = new EventEmitter<any>();

  @ViewChild('printAble') screen!: ElementRef;
  
  print(){
    this.downloadAndPrintService.print(this.screen);
  }
  addNewPrescription(){
    this.addNewPrescriptions.emit()
    this.addNewMedicine = true;

  }
  backToSelectedHistory(){
    this.addNewMedicine = false;
    this.showNewPresc = true;

  }

  selctedMedicineEvent(action: string){
  }
  saveAndPrintPresription(newPrescriptions: any){
    console.log(newPrescriptions);
    
    this.newPrescribedMedicines = newPrescriptions;
    this.backToSelectedHistory();
  }
}
