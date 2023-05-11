import { Component, Input } from '@angular/core';
import { Patient } from '../../search/patient-search.component';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  @Input('currentPatient')
  currentPatient!: Patient;
}
