import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PatientMedicine } from '../patient-search.component';
import { Observable } from 'rxjs';

import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-new-prescriptions',
  templateUrl: './new-prescriptions.component.html',
  styleUrls: ['./new-prescriptions.component.css']
})
export class NewPrescriptionsComponent {

  newPrescriptions: PatientMedicine[] = [];

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
    alert(value);
    //API call to fetch medicine list
    const filterValue = value.toLowerCase();
    return [];
  }

  searchForMedicine(){

  }
  saveNewMedicine(){
    let name = this.medicineControl.value == null ? '' : this.medicineControl.value;
    this.prepareNewPrescriptionsData(name)
    console.log("saveNewMedicine: "+this.medicineControl.value);
  }
  medicineSelected(){
    let name = this.medicineControl.value == null ? '' : this.medicineControl.value;
    this.prepareNewPrescriptionsData(name)
    console.log("medicineSelected: "+ this.medicineControl.value);
  }

  prepareNewPrescriptionsData(medicineName : string){
    const newPrescriptionRow = {
      id: 0,
      name:  medicineName,
      dose: '',
      notes: ''
    }
    this.newPrescriptions.push(newPrescriptionRow);
  }

  saveAndPrintPresription(){
    alert(this.newPrescriptions)
    this.saveMedicineInNewPrescription.emit(this.newPrescriptions);
  }
}
