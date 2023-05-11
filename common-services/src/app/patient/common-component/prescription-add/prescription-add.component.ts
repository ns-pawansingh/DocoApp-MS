import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PatientMedicine, Prescription } from '../../search/patient-search.component';
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

  filteredOptions!: Observable<String[]>;
  options:string[] = [];
  medicineControl = new FormControl('');
  isMedicineAvailableInList = true;
  @Output()
  selctedMedicineEvent = new EventEmitter<any>();

  ngOnInit() {
    this.options = ['Dolo', 'D-cold', 'Anacine', 'Disprin', 'Nicip', 'Introcqunal', 'Generic', 'SolvinCold Syr']
  
    this.filteredOptions = this.medicineControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterMedicine(value || '')),
    );
  }

  filterMedicine(value: string): string[] {
    this.isMedicineAvailableInList = true;
    const filterValue = value.toLowerCase();
    let medicineList = this.options.filter(option => (option.toLowerCase().includes(filterValue)));
    if(medicineList.length === 0){
      this.isMedicineAvailableInList = false;
    }
    return medicineList;
  }

  searchForMedicine(){

  }
  saveNewMedicine(){
    let name = this.medicineControl.value == null ? '' : this.medicineControl.value;
    this.prepareNewPrescriptionsData(name)
  }
  medicineSelected(){
    let name = this.medicineControl.value == null ? '' : this.medicineControl.value;
    this.medicineControl.patchValue('');
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
