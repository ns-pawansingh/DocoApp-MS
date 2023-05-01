package com.doco.patient.history.dao;

import com.doco.patient.history.model.PatientHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientHistoryDao extends JpaRepository<PatientHistory, Long> {

    List<PatientHistory> findByPatientId(Long patientId);
}
