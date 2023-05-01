import { Component, Input } from '@angular/core';
import { Patient } from '../patient/patient-search.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input()
  currentPatient!: Patient

  @Input()
  selectedHistory: any;

}
