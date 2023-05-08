package com.doco.patient.history.model;

import jakarta.persistence.*;

@Entity
@Table(name = "patient_health_measurement")
public class HealthMeasurement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "levelKey")
    private String key;

    @Column(name="levelValue")
    private String value;

    public HealthMeasurement(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
