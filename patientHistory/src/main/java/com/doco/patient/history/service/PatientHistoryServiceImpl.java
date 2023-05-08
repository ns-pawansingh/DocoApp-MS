package com.doco.patient.history.service;

import com.doco.patient.history.dao.PatientHistoryDao;
import com.doco.patient.history.model.PatientHistory;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PatientHistoryServiceImpl implements PatientHistoryService {
    final ObjectMapper objectMapper = new ObjectMapper();
    @Autowired
    private PatientHistoryDao patientHistoryDao;

    @Override
    @Transactional
    public PatientHistory getPatientLastHistory(Long patientId) {
        return patientHistoryDao.findByPatientId(patientId).get(0);
    }

    @Override
    @Transactional
    public PatientHistory getPatientHistoryById(Long id) {
        return patientHistoryDao.findById(id).orElse(new PatientHistory());
    }

    @Override
    @Transactional
    public List<PatientHistory> getAllHistory(Long patientId) {
        return patientHistoryDao.findByPatientId(patientId);
    }

    @Override
    @Transactional
    public void save(PatientHistory patientDetail) {
        patientHistoryDao.save(patientDetail);
    }/*

    private List<HealthMeasurement> convertStringToHealthMeasure(String json) {
        List<HealthMeasurement> measurementList = new ArrayList<>();
        try {
            measurementList = objectMapper.readValue(json, new TypeReference<List<HealthMeasurement>>() {});
        } catch (Exception e) {
            System.err.println(e);
        }
        return measurementList;
    }*/
}
