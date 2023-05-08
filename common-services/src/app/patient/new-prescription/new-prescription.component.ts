import { Component, Input } from '@angular/core';
import { Patient, PatientHistory, PatientMedicine, Prescription } from '../search/patient-search.component';

@Component({
  selector: 'app-new-prescription',
  templateUrl: './new-prescription.component.html',
  styleUrls: ['./new-prescription.component.css']
})
export class NewPrescriptionComponent {

  
  @Input('currentPatient')
  currentPatient!: Patient;
  newHistory: PatientHistory | undefined;
  ngOnInit(): void {
    const storedCurrentPatient = sessionStorage.getItem("currentPatient");
    this.currentPatient = storedCurrentPatient == null ? null : JSON.parse(storedCurrentPatient);
    
  }
  selctedMedicineEvent(action: string){
  }

  saveAndPrintPresription(newPrescriptions: Prescription){
    if(this.newHistory === undefined){
      this.newHistory = {
        historyId: 0,
        patientId: this.currentPatient?.patientId,
        lastVisit: new Date().toString(),
        healthDetails: "",
        notes:"",
        prescriptions: [],
      };
    }
    if(this.newHistory?.prescriptions.length > 0){
      this.newHistory?.prescriptions[0]?.medicines.push(...newPrescriptions.medicines);
    }else{
      this.newHistory.prescriptions = [newPrescriptions];
    }
  }


  saveAndPrint(){
    console.log("saveAndPrint clicked");
  }
  healthMeasureFormGroupData(event: any){
    console.log(event);
  }

}
