import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHealthReportComponent } from './patient-health-report.component';

describe('PatientHealthReportComponent', () => {
  let component: PatientHealthReportComponent;
  let fixture: ComponentFixture<PatientHealthReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHealthReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientHealthReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
