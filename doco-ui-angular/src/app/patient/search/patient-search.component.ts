import { Component, OnInit, Optional } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PatientService } from '../../patient-service/patient.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  constructor(private patientService: PatientService, private route: Router){}
  
  patientFormControl = new FormControl('');
  currentPatient!: Patient;
  showHistoryDetail = false;
  showHistory = false;
  addPrescription = false;
  selectedHistory : any ;//= {"historyId":0,"patientId":2,"lastVisit":"Wed May 03 2023 18:50:51 GMT+0530 (India Standard Time)","healthDetails":"","notes":"","healthMeasurements":"","prescriptions":[{"prescDate":"Wed May 03 2023","medicines":[{"id":0,"name":"Dolo","dose":"1*3","notes":"In fever"},{"id":0,"name":"Anacine","dose":"3*3","notes":"In headache"}]}]};
  patientHistory!: PatientHistory[];
  options: Patient[] = [];
  filteredOptions!: Observable<Patient[]>;
  addPatient = false;

  ngOnInit() {
    this.addPrescription = false;
    this.patientService.getAllPatients().subscribe(data => {
      this.options = data;
    });
    this.filteredOptions = this.patientFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterPatient(value || '')),
    );
  }

   filterPatient(value: string): Patient[] {
    
    this.showHistory = false;
    const filterValue = value.toLowerCase();
    let patientList = this.options.filter(option => (option.patientName.toLowerCase().includes(filterValue)  || 
    option.phone.toLowerCase().includes(filterValue)));
    if(patientList.length === 0){
      this.addPatient = true;
    }else{
      this.addPatient = false;
    }
    return patientList;
  }
  optionSelected(patient: any){
    this.addPatient = false;
    this.currentPatient = this.fetchPatientDetails(patient.option.value);
    this.patientService.getPatientHistoryByPatientId(this.currentPatient.patientId)
    .subscribe((data: PatientHistory[]) => {
      this.patientHistory = data;
      console.log(this.patientHistory);
    });
    this.showHistory = true;
  }

  fetchPatientDetails(selectedPatient: string): Patient{
    const phone = selectedPatient.split('-')[1];
    return this.options.filter((patient: Patient) => patient.phone === phone)[0];
  }

  viewHistoryDetails(event: any){
    this.selectedHistory = event;
    this.showHistoryDetail = true;
  }
  addNewPrescriptions(){
    console.log("new Prescrioons added!!!")
  }
  
  addNewPatient(){
    console.log("add new patient clicked")
    this.route.navigate(['/patient/new'],{ queryParams: { name: this.patientFormControl.value} });
  }

  prescribeMedicine = () =>{
    sessionStorage.setItem("currentPatient", JSON.stringify(this.currentPatient));
    this.route.navigate(['/prescription/new']);
  }

}
export interface Patient{
  patientId: number;
  patientName: string;
  phone: string;
  email: string;
  address:string;
  age: string;
  gender:string;
}
export interface PatientHistory{
  historyId?: number;
  patientId: number;
  lastVisit: string;
  healthDetails: string;
  notes:string;
  prescriptions: Prescription[];
}

export interface PatientMedicine{
  id?: number;
  name: string;
  dose: string;
  notes: string;
}

export interface HealthMeasurement{
  id?: number;
  key: string;
  value: string;
}

export interface Prescription{
  prescId?: number;
  prescDate: string;
  medicines: PatientMedicine[];
  healthMeasurements: HealthMeasurement[];
}