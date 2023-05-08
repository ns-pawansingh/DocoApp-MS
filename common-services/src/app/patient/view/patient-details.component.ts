import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { HealthMeasurement, Patient, PatientHistory, PatientMedicine, Prescription } from '../search/patient-search.component';
import { PrintDownloadService } from 'src/app/print/print-download.service';
import { PatientService } from 'src/app/patient-service/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {
  constructor(private downloadAndPrintService: PrintDownloadService, private patientService: PatientService) { }
  medicneForSearch: string = '';
  addNewMedicine = false;
  newPrescriptions: Prescription = {
    prescId: 0,
    prescDate: '',
    medicines: [],
    healthMeasurements: []
  };
  today = new Date();
  showNewPresc = false;
  @Input()
  currentPatient!: Patient

  @Input()
  selectedHistory: PatientHistory = {
    patientId: this.currentPatient?.patientId,
    lastVisit: new Date().toString(),
    healthDetails: "",
    notes: "",
    prescriptions: [],
  };

  @Output()
  addNewPrescriptions = new EventEmitter<any>();

  @ViewChild('printAble') screen!: ElementRef;

  lastHealthMeasurement!: HealthMeasurement[];

  ngOnInit(): void {
    if (this.selectedHistory.prescriptions.length > 0) {
      this.selectedHistory.prescriptions.sort((p1: Prescription, p2: Prescription) => {
        if (p1.prescId !== undefined && p2.prescId !== undefined) {
          return p2.prescId - p1.prescId;
        }else {
          return 0;
        }
      });
      let firstFound = false;
      this.selectedHistory.prescriptions.forEach((presc: Prescription) => {
        if (!firstFound && presc.healthMeasurements.length > 0) {
          this.lastHealthMeasurement = JSON.parse(JSON.stringify(presc.healthMeasurements));
          firstFound = true;
        }
      });
    }
  }

  print() {
    this.downloadAndPrintService.print(this.screen);
  }
  addNewPrescription() {
    this.addNewPrescriptions.emit()
    this.addNewMedicine = true;
  }
  backToSelectedHistory() {
    this.addNewMedicine = false;
    this.showNewPresc = true;
  }

  selctedMedicineEvent(action: string) {
  }
  saveAndPrintPresription(newPrescriptions: Prescription) {
    this.newPrescriptions = newPrescriptions;
    if (this.selectedHistory === undefined) {
      this.selectedHistory = {
        patientId: this.currentPatient?.patientId,
        lastVisit: new Date().toString(),
        healthDetails: "",
        notes: "",
        prescriptions: [],
      };
    };

    const newHealthMeasures = JSON.parse(JSON.stringify(this.lastHealthMeasurement));
    newHealthMeasures.forEach((item: { key: string, id?: number }) => {
      delete item.id;
    });

    this.newPrescriptions.healthMeasurements = newHealthMeasures;
    delete this.newPrescriptions.prescId;
    if (this.selectedHistory?.prescriptions) {
      this.selectedHistory?.prescriptions.push(this.newPrescriptions);
    } else {
      this.selectedHistory.prescriptions = [this.newPrescriptions];
    }
    this.patientService.saveUpdatePatientHistory(JSON.stringify(this.selectedHistory)).subscribe(res => {
      console.log(res);
    });

    this.backToSelectedHistory();
  }
  healthMeasureFormGroupData(event: any) {
    console.log(event);
  }
}
