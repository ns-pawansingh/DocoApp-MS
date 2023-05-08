import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TileComponent } from './tile/tile.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientSearchComponent } from './patient/search/patient-search.component';
import { MedicineCreateComponent } from './medicine/create/medicine-create.component';
import { MedicineDetailsComponent } from './medicine/view/medicine-details.component';
import { MedicineSearchComponent } from './medicine/search/medicine-search.component';
import { PatientHistoryComponent } from './patient/history/patient-history.component';
import { PatientDetailsComponent } from './patient/view/patient-details.component';
import { PatientHealthReportComponent } from './patient/report/patient-health-report.component';
import { PrintPrescriptionComponent } from './print/print-prescription.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MedicineComponent } from './medicine/medicine.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from "@angular/material/form-field";
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { NewPrescriptionsComponent } from './patient/prescription-add/prescription-add.component';
import { NewPatientComponent } from './patient/new/new-patient.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { NewPrescriptionComponent } from './patient/new-prescription/new-prescription.component';
import { PersonalDetailsComponent } from './patient/personal-details/personal-details.component';
import { HealthMeasuresComponent } from './patient/health-measures/health-measures.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    FooterComponent,
    PatientSearchComponent,
    MedicineCreateComponent,
    MedicineDetailsComponent,
    MedicineSearchComponent,
    PatientHistoryComponent,
    PatientDetailsComponent,
    PatientHealthReportComponent,
    PrintPrescriptionComponent,
    AppointmentComponent,
    MedicineComponent,
    TableComponent,
    NewPrescriptionsComponent,
    NewPatientComponent,
    NewPrescriptionComponent,
    PersonalDetailsComponent,
    HealthMeasuresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatListModule,
    MatTableModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatStepperModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
