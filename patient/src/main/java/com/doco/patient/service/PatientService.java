package com.doco.patient.service;

import com.doco.patient.model.PatientDetail;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


public interface PatientService {
     PatientDetail getPatient(Long id) ;

     List<PatientDetail> getAllPatient() ;

     List<PatientDetail> getPatientByName(String name) ;
     PatientDetail update(PatientDetail patientDetail);
     PatientDetail save(PatientDetail patientDetail) ;
     void delete(Long id);

}
