package com.doco.patient.history.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "history_prescription")
public class Prescription  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prescId;
    private String prescDate;
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE, CascadeType.MERGE}, fetch = FetchType.EAGER, orphanRemoval = true)
    @JoinColumn(name = "medicines")
    private Set<MedicineDetail> medicines;

    @OneToMany(cascade ={CascadeType.PERSIST,CascadeType.REMOVE, CascadeType.MERGE}, fetch = FetchType.EAGER, orphanRemoval = true)
    @JoinColumn(name = "healthMeasurements")
    private Set<HealthMeasurement> healthMeasurements;

    public Long getPrescId() {
        return prescId;
    }

    public void setPrescId(Long prescId) {
        this.prescId = prescId;
    }

    public String getPrescDate() {
        return prescDate;
    }

    public void setPrescDate(String prescDate) {
        this.prescDate = prescDate;
    }

    public Set<MedicineDetail> getMedicines() {
        return medicines;
    }

    public void setMedicines(Set<MedicineDetail> medicines) {
        this.medicines = medicines;
    }

    public Set<HealthMeasurement> getHealthMeasurements() {
        return healthMeasurements;
    }

    public void setHealthMeasurements(Set<HealthMeasurement> healthMeasurements) {
        this.healthMeasurements = healthMeasurements;
    }
}
