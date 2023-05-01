import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientHistory } from '../patient/patient-search.component';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private PATIENT_HISTORY_BASE_URI = "http://localhost:8080/patient/history/"

  constructor(private http: HttpClient) { }
  getPatientHistoryByPatientId(patientId: number) {
    return this.http.get<PatientHistory[]>(this.PATIENT_HISTORY_BASE_URI + "/all/" + patientId);
  }
}
