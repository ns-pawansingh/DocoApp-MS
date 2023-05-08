import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../patient-service/patient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup = new FormGroup({});

  
  constructor(private activateRouter:ActivatedRoute, private formBuilder: FormBuilder, private patientService: PatientService){}

  fields=[{id:'bp',key : 'BP',value:"120/80"},{id:'weight',key : 'Weight',value:"80"}];

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      patientName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
    });

    this.fields.forEach(x=>{
      this.secondFormGroup.addControl(x.key,new FormControl(x.value,Validators.required))
     })

     this.activateRouter
      .queryParams
      .subscribe(params => {
       this.firstFormGroup.patchValue({patientName: params['name']})
      });
  }

  genders = ["Male", "Female", "Other"];
  savePatient(){
    
    console.log(JSON.stringify(this.firstFormGroup.getRawValue()));
    this.patientService.saveNewPatient(JSON.stringify(this.firstFormGroup.getRawValue())).subscribe( data =>{
      console.log(data);
    } );
  }

  
}
