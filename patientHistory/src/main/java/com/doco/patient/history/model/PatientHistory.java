package com.doco.patient.history.model;

import jakarta.persistence.*;

import java.util.Date;
import java.util.Set;

@Entity
public class PatientHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long historyId;
    @Column(name = "patient_id", nullable = false)
    private Long patientId;

    @Column(name = "last_visit", updatable = false)
    private Date lastVisit;

    @Column(name = "health_measurements")
    private String healthMeasurements;
    @Column(name = "health_condition")
    private String healthDetails;
    @Column
    private String notes;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "medicines")
    private Set<MedicineDetail> medicines;

    public PatientHistory(Long patientId, String healthDetails, String notes) {
        this.patientId = patientId;
        this.healthDetails = healthDetails;
        this.lastVisit = new Date();
        this.notes = notes;
    }
	 public PatientHistory() {
    }

    public PatientHistory(Long patientId, Set<MedicineDetail> medicineDetails, String healthDetails, String notes) {
        this.patientId = patientId;
        this.healthDetails = healthDetails;
        this.notes = notes;
    }

    public Long getHistoryId() {
        return historyId;
    }

    public void setHistoryId(Long historyId) {
        this.historyId = historyId;
    }

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public Date getLastVisit() {
        return lastVisit;
    }

    public void setLastVisit(Date lastVisit) {
        this.lastVisit = lastVisit;
    }

    public String getHealthDetails() {
        return healthDetails;
    }

    public void setHealthDetails(String healthDetails) {
        this.healthDetails = healthDetails;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Set<MedicineDetail> getMedicines() {
        return medicines;
    }

    public void setMedicines(Set<MedicineDetail> medicines) {
        this.medicines = medicines;
    }

    public String getHealthMeasurements() {
        return healthMeasurements;
    }

    public void setHealthMeasurements(String healthMeasurements) {
        this.healthMeasurements = healthMeasurements;
    }
}
