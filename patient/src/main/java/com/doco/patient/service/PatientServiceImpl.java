package com.doco.patient.service;

import com.doco.patient.dao.PatientRepo;
import com.doco.patient.model.PatientDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class PatientServiceImpl implements PatientService{

    @Autowired
   private PatientRepo patientRepo;
    private static List<PatientDetail> patientDetails = new ArrayList<>();
    @Transactional
    public PatientDetail getPatient(Long id) {
        if (id == null) {
            return null;
        }
        return patientRepo.findById(id).orElse(null);

    }

    @Override
    @Transactional
    public List<PatientDetail> getAllPatient() {
        return patientRepo.findAll();
    }

    @Override
    @Transactional
    public List<PatientDetail> getPatientByName(String name) {
        return patientRepo.findByPatientName(name);
    }

    @Transactional
    public PatientDetail update(PatientDetail patientDetail) {
        patientRepo.save(patientDetail);
        return patientDetail;
    }
    @Transactional
    public PatientDetail save(PatientDetail patientDetail) {
      return patientRepo.save(patientDetail);
    }
    @Transactional
    public void delete(Long id) {
        if (id == null) {
            return;
        }
        patientDetails.removeIf(x -> x.getPatientId() == id);
    }

}
