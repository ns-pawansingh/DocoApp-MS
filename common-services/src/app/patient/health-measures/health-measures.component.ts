import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/patient-service/patient.service';

@Component({
  selector: 'app-health-measures',
  templateUrl: './health-measures.component.html',
  styleUrls: ['./health-measures.component.css']
})
export class HealthMeasuresComponent {

  @Input()
  healthMeasures: {id?:number, key:string, value:string}[] = [];

  @Output()
  healthMeasureFormGroupData: EventEmitter<any> = new EventEmitter();

  constructor(private activateRouter:ActivatedRoute, private formBuilder: FormBuilder){}
  newFields: {id?:number,key : string,value:string}[]=[];

  addMeasure(){
    const newField = {key : '',value:''};
    this.newFields.push(newField);
  }

  saveNewHealthMeasure(){    
    this.healthMeasures.push(...this.newFields);
    this.updateHealthMeasures();
    this.newFields = [];
  }
  removeMeasure(key:string){
    this.newFields = this.newFields.filter((item: {key:string}) => { 
      return item.key !== key; 
    });
  }

  updateHealthMeasures(){
    this.healthMeasureFormGroupData.emit(this.healthMeasures);
  }
}
