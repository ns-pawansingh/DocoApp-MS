import { Component, Input } from '@angular/core';
import { HealthMeasurement, Patient, PatientHistory, PatientMedicine, Prescription } from '../search/patient-search.component';
import { PatientService } from '../../patient-service/patient.service';

@Component({
  selector: 'app-new-prescription',
  templateUrl: './new-prescription.component.html',
  styleUrls: ['./new-prescription.component.css']
})
export class NewPrescriptionComponent {

  constructor(private patientService: PatientService){}

  @Input('currentPatient')
  currentPatient!: Patient;
  newHistory: PatientHistory | undefined;
  healthMeasures: HealthMeasurement[] = [];
  ngOnInit(): void {
    const storedCurrentPatient = sessionStorage.getItem("currentPatient");
    this.currentPatient = storedCurrentPatient == null ? null : JSON.parse(storedCurrentPatient);
    
  }
  selctedMedicineEvent(action: string){
  }

  saveAndPrintPresription(newPrescriptions: Prescription){
    if(this.newHistory === undefined){
      this.newHistory = {
        patientId: this.currentPatient?.patientId,
        lastVisit: new Date().toISOString(),
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
    delete this.newHistory.prescriptions[0].prescId;
    this.newHistory.prescriptions[0].healthMeasurements = this.healthMeasures;
    this.patientService.saveUpdatePatientHistory(JSON.stringify(this.newHistory)).subscribe(res =>{

    })
  }


  saveAndPrint(){
    console.log("saveAndPrint clicked");
  }
  healthMeasureFormGroupData(event: any){
    console.log(event);
  }

}
