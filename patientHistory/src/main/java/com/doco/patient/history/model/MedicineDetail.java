package com.doco.patient.history.model;

import jakarta.persistence.*;

@Entity
@Table(name = "patient_medicine_history")
public class MedicineDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String dose;
    @Column
    private String notes;

    public MedicineDetail(String name, String dose) {
        this(name,  dose,  null, null);
    }
    public MedicineDetail(String name, String dose, String notes, Long historyId) {
        this.name = name;
        this.dose = dose;
        this.notes = notes;
    }
 public MedicineDetail(){}


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDose() {
        return dose;
    }

    public void setDose(String dose) {
        this.dose = dose;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

}
