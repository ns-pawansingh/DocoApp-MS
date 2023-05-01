package com.doco.patient.model;

import jakarta.persistence.*;

import javax.annotation.processing.Generated;

@Entity
public class PatientDetail {

    @Id
    @GeneratedValue
    private Long patientId;
    @Column(name="patient_name", nullable = false)
    private String patientName;
    @Column(name="phone", nullable = false)
    private String phone;
    @Column(name="email")
    private String email;
    private String address;

    public PatientDetail(Long patientId, String patientName, String phone, String email, String address) {
        this.patientId = patientId;
        this.patientName = patientName;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }

    public PatientDetail(Long id, String patientName, String phone) {
        this.patientId = id;
        this.patientName = patientName;
        this.phone = phone;
    }
    public PatientDetail(){}

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
