package com.doco.patient.history.service;

import com.doco.patient.history.model.PatientHistory;

import java.util.List;

public interface PatientHistoryService {
    PatientHistory getPatientLastHistory(Long patientId);

    PatientHistory getPatientHistoryById(Long historyId);

    List<PatientHistory> getAllHistory(Long patientId);

    void save(PatientHistory patientDetail);
}
