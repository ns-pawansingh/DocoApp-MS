import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientSearchComponent } from './patient/patient-search.component';
import { PrintPrescriptionComponent } from './print/print-prescription.component';
import { PatientHealthReportComponent } from './patient/report/patient-health-report.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MedicineSearchComponent } from './medicine/search/medicine-search.component';
import { MedicineComponent } from './medicine/medicine.component';

const routes: Routes = [
{
  path: 'patient',
  component: PatientSearchComponent,
  pathMatch: 'full'
},{
  path: 'report',
  component: PrintPrescriptionComponent,//PatientHealthReportComponent,
  pathMatch: 'full'
},{
  path: 'medicine',
  component: MedicineComponent,
  pathMatch: 'full'
},{
  path: 'appointment',
  component: AppointmentComponent,
  pathMatch: 'full'
},
{
  path: '',
  component: PatientSearchComponent,
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
