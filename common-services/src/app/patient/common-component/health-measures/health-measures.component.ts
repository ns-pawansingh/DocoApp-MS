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

  @Input('disabled')
  isHealthMesaureDisabled = true;

  @Output()
  healthMeasureFormGroupData: EventEmitter<any> = new EventEmitter();

  constructor(private activateRouter:ActivatedRoute, private formBuilder: FormBuilder){}
  newFields: {id?:number,key : string,value:string}[]=[];

  ngOnInit(): void {
    
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  addMeasure(){
    const newField = {key : '',value:''};
    this.newFields.push(newField);
  }

  saveNewHealthMeasure(){
    this.healthMeasures.push(...this.newFields);
    this.healthMeasures = this.healthMeasures.filter((measure: {key:string, value:string}) => measure.key !== '' && measure.value !== '');
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
