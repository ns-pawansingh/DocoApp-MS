import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PatientService } from '../patient-service/patient.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  constructor(private patientService: PatientService){}

  myControl = new FormControl('');
  currentPatient!: Patient;
  showHistoryDetail = false;
  showHistory = false;
  selectedHistory : any;
  patientHistory!: PatientHistory[];
  options: Patient[] = [{"age": "33","gender": "Male","patientId":1,"patientName":"Ajay Kumar Singh","phone":"1100230","email":"pankajpankaj2006@gmail.com","address":"D Block Pandav Nagar Delhi 110092"},{"age": "33","gender": "Male","patientId":2,"patientName":"Pankaj Kumar Singh","phone":"9313469723","email":"testPankaj@gmail.com","address":"A Block Ganesh Nagar"},{"age": "33","gender": "Male","patientId":3,"patientName":"Pawan Kumar Singh","phone":"9873992971","email":"pawansingh7407@gmail.com","address":"A Block Pandav Nagar"}];
  filteredOptions!: Observable<Patient[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterPatient(value || '')),
    );
  }

   filterPatient(value: string): Patient[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.patientName.toLowerCase().includes(filterValue));
  }
  optionSelected(patient: any){
    this.currentPatient = this.fetchPatientDetails(patient.option.value);
    this.patientService.getPatientHistoryByPatientId(this.currentPatient.patientId)
    .subscribe((data: PatientHistory[]) => {
      this.patientHistory = data;
      this.patientHistory.forEach((item: PatientHistory) => {
        item.healthMeasurements = JSON.parse(item.healthMeasurements);
      })
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
  historyId: number;
  patientId: number;
  lastVisit: string;
  healthDetails: string;
  notes:string;
  healthMeasurements: any
  medicines: PatientMedicine[];
}

export interface PatientMedicine{
  id: number;
  name: string;
  dose: string;
  notes: string;
}