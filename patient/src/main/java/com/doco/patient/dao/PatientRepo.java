package com.doco.patient.dao;

import com.doco.patient.model.PatientDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientRepo extends JpaRepository<PatientDetail, Long> {

    List<PatientDetail> findByPatientName(String name);
}
