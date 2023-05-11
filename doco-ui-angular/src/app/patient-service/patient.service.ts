import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientHistory } from '../patient/search/patient-search.component';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private PATIENT_HISTORY_BASE_URI = "http://localhost:8080/patient/history"
  private PATIENT_BASE_URI = "http://localhost:8080/patient"

  constructor(private http: HttpClient) { }
  getPatientHistoryByPatientId(patientId: number) {
    return this.http.get<PatientHistory[]>(this.PATIENT_HISTORY_BASE_URI + "/all/" + patientId);
  }

  saveNewPatient(patientJson: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.PATIENT_BASE_URI+"/save", patientJson, {headers: headers});
  }
  saveUpdatePatientHistory(patientHistory: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.PATIENT_HISTORY_BASE_URI+"/save", patientHistory, {headers: headers});
  }
  getAllPatients() {
    return this.http.get<any[]>(this.PATIENT_BASE_URI + "/all");
  }
}
