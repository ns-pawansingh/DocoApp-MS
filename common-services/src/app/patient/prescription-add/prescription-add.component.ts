import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PatientMedicine, Prescription } from '../search/patient-search.component';
import { Observable } from 'rxjs';

import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-prescription-add',
  templateUrl: './prescription-add.component.html',
  styleUrls: ['./prescription-add.component.css']
})
export class NewPrescriptionsComponent {

  @Input('prescription')
  newPrescriptions: Prescription = {
    prescId: 0,
    prescDate: new Date().toDateString(),
    medicines: [],
    healthMeasurements: []
  };

  @Output()
  saveMedicineInNewPrescription = new EventEmitter<any>();

  medicineList$!: Observable<PatientMedicine[]>;
  medicineListOptions = ['Dolo', 'D-cold', 'Anacine', 'Disprin', 'Nicip', 'Introcqunal', 'Generic', 'SolvinCold Syr']
  medicineControl = new FormControl('');
  @Output()
  selctedMedicineEvent = new EventEmitter<any>();

  ngOnInit() {
    this.medicineList$ = this.medicineControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterPatient(value || '')),
    );
  }

  filterPatient(value: string): PatientMedicine[] {
    //API call to fetch medicine list
    const filterValue = value.toLowerCase();
    return [];
  }

  searchForMedicine(){

  }
  saveNewMedicine(){
    let name = this.medicineControl.value == null ? '' : this.medicineControl.value;
    this.prepareNewPrescriptionsData(name)
  }
  medicineSelected(){
    let name = this.medicineControl.value == null ? '' : this.medicineControl.value;
    this.medicineControl = new FormControl('');
    this.prepareNewPrescriptionsData(name);
  }

  prepareNewPrescriptionsData(medicineName : string){
    const newMedicineRow : PatientMedicine = {
      name:  medicineName,
      dose: '',
      notes: ''
    }
    let pushToMedicines = true;
    this.newPrescriptions.medicines.forEach((item: PatientMedicine) => {
      if(item.name === medicineName){
        pushToMedicines = false;
      }
    });
    if(pushToMedicines){
      this.newPrescriptions.medicines.push(newMedicineRow);
    }
  }

  saveAndPrintPresription(){
    const newPresc = {...this.newPrescriptions};
    console.log(newPresc);
    this.saveMedicineInNewPrescription.emit(newPresc);
    this.newPrescriptions.medicines = [];
  }
}
