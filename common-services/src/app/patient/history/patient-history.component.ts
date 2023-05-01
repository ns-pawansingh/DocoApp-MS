import { Component, Input,EventEmitter, Output } from '@angular/core';
import { PatientHistory } from '../patient-search.component';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent {

  @Output() showHistoryDetail = new EventEmitter<string>();

  @Input()
  displayedColumns!: string[];
  @Input()
  patientHistory!: PatientHistory[];
 
    viewHistoryDetail(history: any){
      this.showHistoryDetail.emit(history);
    }

}
